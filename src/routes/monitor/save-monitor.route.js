const { MonitorsController } = require('../../controllers')

module.exports = server => {
  server.post('/monitor', MonitorsController.saveRecord)
}
