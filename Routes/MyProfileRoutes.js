const express=require("express")
const router=express.Router()
const myProfileRouter=require('../Controllers/MyProfileController')
router.get("/MyProfile/Profile",myProfileRouter.ProfileHeaderFunction)
router.put('/MyProfile/About/:id',myProfileRouter.UpdateManagerFunction);
module.exports=router
