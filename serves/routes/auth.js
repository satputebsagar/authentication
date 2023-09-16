const express =require('express');
const authController=require('../controller/auth.js');

const router=express.Router();

router.post('/google',authController.login);

module.exports=router;