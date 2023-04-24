const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.use(express.json());

router.post("/", async(req, res) => {

    const user = new User(req.body);
  
    try{
        await user.save();
        res.send(user);
    }
    catch(err){
        console.log(err);
        console.log(req.body)
        res.status(500).send(error);
    }
  });
module.exports = router;

