const express=require("express");
const router=express.Router();
const ViewClientController=require('../Controllers/ViewClientController')

router.get('/MyProfile/Client/ViewClient/:id',ViewClientController.getViewClientData);
router.get('/MyProfile/Client/ParticularClient/ClientInfo/:id',ViewClientController.getClientInfoData);
// router.get("/MyProfile/Client/ParticularClient/ClientInfo/:id",ViewClientController.viewClient1Data)

module.exports=router