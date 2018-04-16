const mongoose = require('mongoose')
const connectionURI = `mongodb://localhost/2018candidates_db`

mongoose.Promise = Promise

mongoose.connect(connectionURI)
  .then(console.log('db connection established'))
  .catch(console.log('db connection failed'))

module.exports = mongoose
