const express = require('express');
const router = express.Router();
const passport = require('passport');

// @route GET api/outage/test
// @desc Register User
// @access Public
router.get('/test', (req, res) => {
  res.status(200).json({"message": "Outages test route works!"});
});

module.exports = router;