const url = require('url')

/**
 * Normalizes a Port
 * @returns (string|number|boolean)
 */
function normalizePort (val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    return val // named pipe
  }

  if (port >= 0) {
    return port // port number
  }

  return false
}

/**
 * Formats the DB URI
 * @param {object} mongoDBConfig MongoDB config object
 * @param {string} mongoDBConfig.host MongoDB host
 * @param {string} mongoDBConfig.port MongoDB port
 * @param {string} mongoDBConfig.name MongoDB database name
 * @returns (string) An uri like: 'mongodb://express-books-db:27017/books'
 */
function formatDBUri ({ host, port, name }) {
  return url.format({
    protocol: 'mongodb',
    slashes: true,
    hostname: host,
    port: port,
    pathname: name
  })
}

module.exports = {
  formatDBUri,
  normalizePort
}
