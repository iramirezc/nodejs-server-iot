const { sync } = require('glob')

module.exports = server => {
  const models = server.locals.models = {}
  const paths = sync('../models/**/*.model.js', { cwd: __dirname })

  paths.forEach(path => {
    const model = require(path)
    const { modelName } = model

    console.log(`Adding model: ${modelName}`)

    models[modelName] = model
  })
}
