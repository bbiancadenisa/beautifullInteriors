const express = require("express")
const router = express.Router()

router.route("/new").post((req,res =>{
    res.send({status: 200, message: 'Everything seems to be working fine on POST'})
}))

router.route("/all").get((req,res =>{
    res.send({status: 200, message: 'Everything seems to be working fine on GET'})
}))

router.route("/search").get((req,res =>{
    res.send({status: 200, message: 'Everything seems to be working fine on GET'})
}))

module.exports = router