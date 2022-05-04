const express = require('express')
const app = express()

app.get('/climbinfo', function (req, res) {
  res.send('Hello World')
})

app.post('/reviews', (req, res) => {

})

app.post('/messages', (req, res) => {

})


app.listen(3001, (req, res) => {
  console.log(`Listening on port 3000`);
})