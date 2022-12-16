const express=require("express")
const router=express.Router()
const CalenderViewController=require("../Controllers/ClientCalenderViewController")

router.get("/MyProfile/Calender/View",CalenderViewController.ClientCalenderViewFunction)


module.exports=router