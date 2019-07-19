const mongoose = require('mongoose')

const SettingSchema = require('./setting.schema')

const Setting = mongoose.model('Setting', SettingSchema)

module.exports = Setting
