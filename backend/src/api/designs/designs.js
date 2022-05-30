const express = require("express")
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const router = express.Router()
const Design = require("../../models/Design")
const User = require('../../models/User')

const DIR = './public/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, DIR);
  },
  filename: (req, file, cb) => {
    console.log('Look for me', file)
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
  }
});

router.route("/new").post(upload.single('image'), (req,res) =>{
    const {category, description, title, userId, image} = req.body
    const url = req.protocol + '://' + req.get('host')
    const design = new Design({
        title: title,
        category: category,
        description: description,
        userId: userId,
        image: url + '/public/' + req.file.filename
    })
    design.save().then(result => {
      res.status(201).json({
          message: "Design registered successfully!",
          designCreated: {
              image: result.iamge
          }
      })
  }).catch(err => {
      console.log(err),
          res.status(500).json({
              error: err
          });
  })
})

router.route("/all/:id").get(async (req,res) =>{
  const user = await User.findById(req.params.id)
  const designs = await Design.find({userId: req.params.id})
  const result = {
    user, designs
  }
  res.send(result)
})

router.route("/details/:id").get(async (req,res) =>{
  const design = await Design.findById(req.params.id)
  const user = await User.findById(design.userId)
  const result = {
    user, design
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