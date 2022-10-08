const router = require("express").Router();
//const userRoute = require("./routes/user");

const User = require("../models/User");
//const CryptoJS = require("crypto-js");
//const jwt = require("jsonwebtoken");


//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    /* password: CryptoJS.AES.encrypt(
       req.body.password,
       process.env.PASS_SEC
     ).toString(),*/
  })
  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }


})

module.exports = router;