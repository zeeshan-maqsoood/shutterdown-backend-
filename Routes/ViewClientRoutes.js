const express=require("express");
const router=express.Router();
const  ViewClientController=require('../Controllers/ViewClientController')

router.get(
  '/MyProfile/Client/ViewClient',
  ViewClientController.getViewClientData
);

module.exports=router