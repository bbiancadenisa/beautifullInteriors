const express = require("express")
const router = express.Router()

router.route("/").post((req,res =>{
    res.send({status: 200, message: 'Everything seems to be working fine on POST'})
}))

router.route("/logout").get((req,res =>{
    res.send({status: 200, message: 'Everything seems to be working fine on GET'})
}))


module.exports = router