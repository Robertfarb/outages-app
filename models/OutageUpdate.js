const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OutageUpdateSchema = new Schema({
  outage: {
    type: Schema.Types.ObjectId,
    ref: 'outages',
  },
  estimatedRestTime: {
    type: Date,
    required: true
  },
  crewArrivalTime: {
    type: Date,
    required: true
  },
  delayReason: {
    type: String,
    required: true
  },
  completeRestTime: {
    type: Date,
    required: true
  }
});