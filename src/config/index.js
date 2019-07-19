const { normalizePort } = require('../common/utils')

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  SERVER: {
    host: process.env.SERVER_HOST || '0.0.0.0',
    port: normalizePort(process.env.SERVER_PORT || 80)
  },
  MONGO_DB: {
    host: process.env.MONGO_DB_HOST || '127.0.0.1',
    port: process.env.MONGO_DB_PORT || 27017,
    name: process.env.MONGO_DB_NAME || 'iot',
    options: {
      useNewUrlParser: true
    }
  }
}
