const { utils, sinon } = require('../../test')
const Monitor = require('./monitor.model')

describe('Monitor Model - Unit Tests', () => {
  afterEach(() => {
    utils.deleteMongooseModels()
  })

  describe('instance initialization', () => {
    it('should create a new instance of a Monitor', () => {
      const monitor = new Monitor()

      sinon.assert.match(monitor, {
        _id: sinon.match.any,
        created_at: sinon.match.date,
        ground_humidity: 0,
        humidity: 0,
        lighting: 0,
        temperature: 0
      })
    })
  })
})
