const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "My-Authourization-Token-Secret";

router.post('/submitSignUp', async (req, res) => {
    try {

    // Authorization
    const salt = await bcrypt.genSalt(10);
    let secPsswd = await bcrypt.hash(req.body.password,salt);
    
    const formData = req.body;
      
     
      const existingUser = await User.findOne({ username: formData.username });
      if (existingUser) {
        return res.status(400).send('Username already exists');
      }
      
    
      const newFormData = await User.create({
        username: req.body.username,
        password: secPsswd,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        userType:req.body.userType,
    });

      await newFormData.save();
      res.status(200).send('Data saved successfully');
    } catch (error) {
      res.status(500).send('Error saving data');
    }
  });

  router.post('/submitLogin',async(req,res)=>{
    try{
  let userData = await User.findOne({username: req.body.username})

    if(!userData){
       return res.status(400).json({errors: "Invalid Credentials"})
    }
 const pwdCompare = await bcrypt.compare(req.body.password,userData.password);
    if(!pwdCompare){
       return res.status(400).json({errors: "Invalid Credentials"})
    }
 
    const data = {
       user:{
         id:userData._id
        }
    }
 
    const authToken = jwt.sign(data,jwtSecret);
    res.status(200).json({ success: true, user: userData,authToken:authToken });
   } catch(error){
      console.log(error);
   }
 });

  module.exports = router;