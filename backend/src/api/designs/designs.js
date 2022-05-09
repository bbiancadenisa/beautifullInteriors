const express = require("express")
const Design = require("../../models/Design")
const router = express.Router()

router.route("/new").post((req,res) =>{
    const {category, description, userId} = req.body
    const design = new Design({
        category: category,
        description: description,
        userId: userId
    })
    design.save()
    res.send({status: 200, message: 'Everything seems to be working fine on POST'})
})

router.route("/all").get((req,res) =>{
    Design.find()
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err)
    })
})

router.route("/search").get((req,res) =>{
    res.send({status: 200, message: 'Everything seems to be working fine on GET'})
})

module.exports = router