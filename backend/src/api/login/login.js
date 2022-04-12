const express = require("express")
const router = express.Router()

router.route("/").post((req,res =>{
    try {
        console.log(req.body)
        const userEmail = req.body.userEmail;
        const userPassword = req.body.userPassword;
        const result = await User.findOne({ userEmail: userEmail });
        if(result){
          req.session.loggedin = true; //req.session param set
                req.session.userEmail = userEmail;
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
}))

router.route("/logout").get((req,res =>{
    res.send({status: 200, message: 'Everything seems to be working fine on GET'})
}))


module.exports = router