const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User Mongo DB Schema
const OutageSchema = new Schema({
  outageNum: {
    type: Number,
    required: true
  },
  outageType: {
    type: String,
    required: true
  },
  locationCity: {
    type: String,
    required: true
  },
  zipCode: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  customersImpacted: {
    type: Number,
    required: true
  },
  startTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  reason: {
    type: String,
    required: true
  },
  crewStatus: {
    type: String,
    required: true
  }
});

Outage = mongoose.model('outages', OutageSchema);
module.exports = Outage;