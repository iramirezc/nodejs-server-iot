const { utils, sinon } = require('../../test')
const Setting = require('./setting.model')

describe('Setting Model - Unit Tests', () => {
  afterEach(() => {
    utils.deleteMongooseModels()
  })

  describe('instance initialization', () => {
    it('should create a new instance of a Setting', () => {
      const setting = new Setting()
      sinon.assert.match(setting, {
        _id: sinon.match.any,
        created_at: sinon.match.date,
        min_ground_humidity: 0,
        max_ground_humidity: 1,
        min_humidity: 0,
        max_humidity: 1,
        min_lighting: 0,
        max_lighting: 1,
        min_temperature: 0,
        max_temperature: 1,
        frequency: 1
      })
    })
  })
})
