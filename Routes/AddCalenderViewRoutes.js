const express=require("express")

const router=express.Router()
const CalenderViewController=require('../Controllers/AddCalenderViewController')

router.post('http://localhost:5000/MyProfile/Calender/ListView',CalenderViewController.AddClientTeamFunction);


module.exports=router