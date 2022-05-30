const express = require("express");
const User = require("../../models/User");
const router = express.Router()

router.route("/").post(async (req,res) =>{
    try {
        const userEmail = req.body.userEmail;
        const userPassword = req.body.userPassword;
        const result = await User.findOne({ email: userEmail });
        if(result){
          // req.session.loggedin = true; //req.session param set
          //       req.session.userEmail = userEmail;
          return res.status(200).json({ email: userEmail, id: result._id })
        }
        if (!result) {
          return res.status(400).json({ error: "User not found" });
        }
        if(result.userPassword == userPassword){
          return res.send(req.session);
        }
      } catch (err) {
        console.log(err);
        return res.status(404).json(err);
      }
    res.send({status: 200, message: 'Everything seems to be working fine on POST'})
})

router.route("/logout").get((req,res) =>{
    res.send({status: 200, message: 'Everything seems to be working fine on GET'})
})


module.exports = router