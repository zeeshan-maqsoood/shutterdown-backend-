const express=require("express")
const router=express.Router()
const CalenderViewController=require("../Controllers/ClientCalenderViewController")

router.get("/MyProfile/Calender/View/:id",CalenderViewController.ClientCalenderViewFunction)


module.exports=router