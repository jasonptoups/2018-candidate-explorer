const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(parser.json())
app.use(cors())

const candidatesController = require('./controllers/candidates')

app.use('/api/candidates', candidatesController)

app.listen(4000, _ => console.log('listening on port 4000'))
