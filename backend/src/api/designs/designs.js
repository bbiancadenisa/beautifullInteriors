const express = require("express")
const Design = require("../../models/Design")
const User = require('../../models/User')
const router = express.Router()

router.route("/new").post((req,res) =>{
    const {category, description, title, userId} = req.body
    const design = new Design({
        title: title,
        category: category,
        description: description,
        userId: userId
    })
    design.save()
    res.send({status: 200, message: 'Everything seems to be working fine on POST'})
})

router.route("/all/:id").get(async (req,res) =>{
  console.log('Id got', req.params.id)
  const user = await User.findById(req.params.id)
  const designs = await Design.find({userId: req.params.id})
  const result = {
    user, designs
  }
  res.send(result)
})

router.route("/category/:category").get(async (req,res) =>{
  const designs = await Design.find({category: req.params.category})
  res.send(designs)
})

router.route("/search").get((req,res) =>{
    res.send({status: 200, message: 'Everything seems to be working fine on GET'})
})

module.exports = router