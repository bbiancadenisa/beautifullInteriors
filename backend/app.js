const express = require('express')
const app = express();
const port = 3001;

const user = require('./src/api/users/users')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/users", user)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})