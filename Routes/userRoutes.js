const express=require("express")
const userController=require('../Controllers/userController')
const managerList=require('../Controllers/CalenderListViewController')

const router=express.Router()



router.post('/Signup', userController.RegisterPostRequest);
router.post('/', userController.SignInPostRequest);
router.post('/emailVerify', userController.verifyEmail);
router.put("/ResetPassword",userController.newPassword)
router.get('/MyProfile/AddClient/Form-I',managerList.managerList)
module.exports=router