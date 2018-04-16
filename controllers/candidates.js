const express = require('express')
const router = express.Router()
const Candidate = require('../models/candidate')

router.get('/', (req, res) => {
  Candidate.find({})
    .then(candidates => {
      res.json(candidates)
    })
    .catch(err => console.error(err))
})

router.post('/', (req, res) => {
  Candidate
    .create(req.body)
    .then(candidate => res.json(candidate))
    .catch(err => console.error(err))
})

router.put('/:id', (req, res) => {
  Candidate.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(candidate => res.json(candidate))
    .catch(err => console.error(err))
})

router.delete('/:id', (req, res) => {
  Candidate.findOneAndRemove({_id: req.params.id})
    .then(_ => {
      Candidate.find({}).then(all => res.send(all))
    })
})

module.exports = router
