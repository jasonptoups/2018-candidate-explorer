const mongoose = require('mongoose')
const connectionURI = `mongodb://localhost/2018candidates_db`

mongoose.Promise = Promise

if (process.env.NODE_ENV === "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect(connectionURI)
}

module.exports = mongoose
