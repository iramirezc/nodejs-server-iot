const mongoose = require('mongoose')

const MonitorSchema = require('./monitor.schema')

const Monitor = mongoose.model('Monitor', MonitorSchema)

module.exports = Monitor
