const express=require('express')
const router=express.Router()
const  PreviewController  = require('../Controllers/PreviewController');
router.get('/MyProfile/AddClient/Preview',PreviewController.PreviewClientFunction);
module.exports=router