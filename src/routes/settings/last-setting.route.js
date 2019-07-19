const { SettingsController } = require('../../controllers')

module.exports = server => {
  server.get('/settings', SettingsController.getLastSetting)
}
