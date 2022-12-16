const express=require("express")
const router=express.Router()
const CalenderListView=require("../Controllers/CalenderListViewController")
router.get('/MyProfile/Calender/ListView/:id',CalenderListView.ClientListViewController);


module.exports=router