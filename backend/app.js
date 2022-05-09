const express = require('express')
const mongoose = require('mongoose');
const app = express();

app.use(express.json())

const port = 3001;

const user = require('./src/api/users/users')
const design = require('./src/api/designs/designs')
const login = require('./src/api/login/login')
const contact = require('./src/api/contact/contact');

//connect to mongodb
const dbURI = "mongodb+srv://admin:admin@cluster0.wplb5.mongodb.net/beautifulInteriors?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}).then((result) => {
  console.log("connected to the database")
}).catch((err => {
  console.log(err)
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/users", user)
app.use("/designs", design)
app.use("/login", login)
app.use("/contact", contact)
app.use('*', (req, res) => res.status(404).json({ message: "Pagina nu a fost gasita" }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})