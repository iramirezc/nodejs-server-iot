const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = server => {
  server.use(bodyParser.json())
  server.use(cors())
}
