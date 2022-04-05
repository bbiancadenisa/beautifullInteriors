const express = require('express')
const app = express();
const port = 3001;

const user = require('./src/api/users/users')
const design = require('./src/api/designs/designs')
const login = require('./src/api/login/login')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/users", user)
app.use("/designs", design)
app.use("/login", login)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})