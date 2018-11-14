const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load Input Validation
const validateOutageInput = require('../../validation/outage');

// Load Outage model
const Outage = require('../../models/Outage');

// @route GET api/outages/test
// @desc Test outages route
// @access Public
router.get('/test', (req, res) => {
  res.status(200).json({"message": "Outages test route works!"});
});


// @route GET api/outages/
// @desc GET Index of All Outages
// @access Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Outage.find()
    .sort({ date: -1 })
    .then(outages => res.json(outages))
    .catch(err => res.status(404).json({ noOutagesFound: 'No outages found' }));
});

// @route POST api/outages/
// @desc Create a new outage report
// @access Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateOutageInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

  Outage.findOne({ outageNum: req.body.outageNum })
    .then(outage => {
      if (outage) {
        errors.outageNum = 'Outage num already exists'
        return res.status(400).json(errors);
      } else {
        const newOutage = new Outage({
          outageNum: req.body.outageNum,
          outageType: req.body.outageType,
          locationCity: req.body.locationCity,
          zipCode: req.body.zipCode,
          address: req.body.address,
          customersImpacted: req.body.customersImpacted,
          startTime: req.body.startTime,
          reason: req.body.reason,
          crewStatus: req.body.crewStatus,
        });

        newOutage.save()
          .then(outage => res.json(outage))
          .catch(err => console.log(err));
      }
    });
});

// @route GET api/outages/:id
// @desc GET Outage Details
// @access Private
router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Outage.find({ outageNum: req.params.id })
    .then(outage => res.json(outage))
    .catch(err => res.status(404).json({ noOutageFound: 'No Outage found' }));
});

// @route POST api/outages/update/:id
// @desc add Update to Spec. Outage
// @access Private
router.post('/update/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Outage.find({ outageNum: req.params.id })
    .then(outage => {
      const newUpdate = {
        outageNum: outage.outageNum,
        estimatedRestTime: req.body.estimatedRestTime,
        crewArrivalTime: req.body.crewArrivalTime,
        delayReason: req.body.delayReason,
        completeRestTime: req.body.completeRestTime
      }

      outage.updates.unshift(newUpdate);
      outage.save().then(outage => res.json(outage));
    })
    .catch(err => res.status(404).json({ noOutageFound: 'No Outage found' }));
});

module.exports = router;