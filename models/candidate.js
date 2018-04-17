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
    Educator: Boolean,
    Veteran: Boolean,
    Law: Boolean,
    "Public Servant": Boolean,
    Politician: Boolean,
    Business: Boolean,
    Academic: Boolean,
    STEM: Boolean
  },
  ethnicities: {
    White: Boolean,
    Hispanic: Boolean,
    "East Asian": Boolean,
    "South Asian": Boolean,
    "African American": Boolean,
    Mixed: Boolean
  }
})

module.exports = mongoose.model('Candidate', candidateSchema)
