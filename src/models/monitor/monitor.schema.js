const mongoose = require('mongoose')

const MonitorSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  humidity: {
    type: Number,
    default: 0
  },
  ground_humidity: {
    type: Number,
    default: 0
  },
  lighting: {
    type: Number,
    default: 0
  },
  temperature: {
    type: Number,
    default: 0
  }
})

module.exports = MonitorSchema
