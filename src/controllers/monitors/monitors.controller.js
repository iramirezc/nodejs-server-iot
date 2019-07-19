const { MonitorModel } = require('../../models')

class MonitorsController {
  static saveRecord (req, res) {
    return MonitorModel.create(req.body)
      .then(monitor => {
        return res.status(201).json({
          status: 'success',
          data: monitor
        })
      })
      .catch(err => {
        return res.status(500).json({
          status: 'fail',
          message: String(err)
        })
      })
  }

  static getAll (req, res) {
    return MonitorModel.find()
      .sort({ created_at: -1 })
      .then(records => {
        return res.status(200).json({
          status: 'success',
          data: records
        })
      })
      .catch(err => {
        return res.status(500).json({
          status: 'fail',
          message: String(err)
        })
      })
  }
}

module.exports = MonitorsController
