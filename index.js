require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('<h1>Hello bhaiya ji!</h1>')
})

app.get('/login', (req, res) => {
  res.send('<h1>please login at chai or code</h1>')
})

app.get('/chikoo', (req, res) => {
  res.send('welcome saubhagya bhai!')
})

app.get ('/youtube',(req, res) => {
  res.send('<h1> This will be my Youtube Channel</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})