const { SettingsController } = require('../../controllers')

module.exports = server => {
  server.post('/settings', SettingsController.saveSetting)
}
