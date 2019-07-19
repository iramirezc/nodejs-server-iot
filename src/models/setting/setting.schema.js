const mongoose = require('mongoose')

const SettingSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  min_ground_humidity: {
    type: Number,
    default: 0
  },
  max_ground_humidity: {
    type: Number,
    default: 1
  },
  min_humidity: {
    type: Number,
    default: 0
  },
  max_humidity: {
    type: Number,
    default: 1
  },
  min_lighting: {
    type: Number,
    default: 0
  },
  max_lighting: {
    type: Number,
    default: 1
  },
  min_temperature: {
    type: Number,
    default: 0
  },
  max_temperature: {
    type: Number,
    default: 1
  }
})

module.exports = SettingSchema
