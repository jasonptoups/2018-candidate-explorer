const mongoose = require('../db/connection.js')

const candidateSchema = new mongoose.Schema({
  name: String,
  image: String,
  state: String,
  district: String,
  age: Number,
  gender: String,
  sexuality: String,
  website: String,
  bio: String,
  hot: Boolean,
  professions: {
    educator: Boolean,
    veteran: Boolean,
    law: Boolean,
    publicservant: Boolean,
    politician: Boolean,
    business: Boolean,
    academic: Boolean,
    stem: Boolean
  }
})

module.exports = mongoose.model('Candidate', candidateSchema)
