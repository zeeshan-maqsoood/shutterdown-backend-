const express=require("express")
const userController=require('../Controllers/userController')
const router=express.Router()



router.post('/Signup', userController.RegisterPostRequest);
router.post('/', userController.SignInPostRequest);
router.post('/emailVerify', userController.verifyEmail);
router.put("/ResetPassword",userController.newPassword)

module.exports=router