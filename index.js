const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(parser.json())
app.use(cors())
app.set('port', process.env.PORT || 4000)


const candidatesController = require('./controllers/candidates')

app.use('/api/candidates', candidatesController)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
