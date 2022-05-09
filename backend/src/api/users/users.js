const express = require("express")
const User = require("../../models/User")
const router = express.Router()

router.route("/new").post((req,res) =>{
    console.log(req.body)
    const {email, password, userName} =  req.body
    const user = new User({
        email: email,
        password: password,
        userName: userName
    })
    user.save()
    res.send({status: 200, message: 'Everything seems to be working fine on POST'})
})

router.route("/all").get((req,res) =>{
    User.find()
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err)
    })
    // res.send({status: 200, message: 'Everything seems to be working fine on GET'})
})


module.exports = router