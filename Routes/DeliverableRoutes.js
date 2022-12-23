const express=require("express")
const router=express.Router()
const delivarableController=require("../Controllers/DeliverableController")


router.get('/MyProfile/Deliverables/Cinematography/:id',delivarableController.getCinematographerData);
router.get(
  '/MyProfile/Deliverables/Cinematography',
  delivarableController.getEditorRule
);

module.exports=router