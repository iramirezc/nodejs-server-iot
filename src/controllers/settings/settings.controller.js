const { SettingModel } = require('../../models')

class SettingsController {
  static saveSetting (req, res) {
    return SettingModel.create(req.body)
      .then(setting => {
        return res.status(201).json({
          status: 'success',
          data: setting
        })
      })
      .catch(err => {
        return res.status(500).json({
          status: 'fail',
          message: String(err)
        })
      })
  }

  static getLastSetting (req, res) {
    return SettingModel.find()
      .sort({ created_at: -1 })
      .limit(1)
      .then(setting => {
        return res.status(200).json({
          status: 'success',
          data: setting
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

module.exports = SettingsController
