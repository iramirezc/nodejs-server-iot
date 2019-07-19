const { MonitorsController } = require('../../controllers')

module.exports = server => {
  server.get('/monitor', MonitorsController.getAll)
}
