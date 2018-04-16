const Candidate = require('../models/candidate.js')
const seedData = require('./seedData.json')

Candidate.remove({}).then(_ => {
  console.log('dropped the old DB')
  seedData.forEach(candidate => {
    Candidate.create(candidate)
  })
})
