const express=require("express");
const router=express.Router();
const ViewClientController=require('../Controllers/ViewClientController')

router.post('/MyProfile/Client/ViewClient',ViewClientController.getViewClientData);
router.get('/MyProfile/Client/ParticularClient/ClientInfo/:id',ViewClientController.getClientInfoData);

module.exports=router