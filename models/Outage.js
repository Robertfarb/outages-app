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
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  customersImpacted: {
    type: String,
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
  },
  updates: [
    {
      outageNum: {
        type: String,
        required: true
      },
      estimatedRestTime: {
        type: Date,
        required: true
      },
      crewArrivalTime: {
        type: Date,
        reqiured: true
      },
      delayReason: {
        type: String,
        required: true
      },
      completeRestTime: {
        type: Date,
        required: true
      }
    }
  ]
});

Outage = mongoose.model('outages', OutageSchema);
module.exports = Outage;