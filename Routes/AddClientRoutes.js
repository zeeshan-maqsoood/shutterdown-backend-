const express=require("express")
const ClientController=require("../Controllers/AddClientController")
const router=express.Router();

router.post('/AddClient/Form-I', ClientController.AddClientFunction);
router.post('/AddClient/Form-II', ClientController.AddMoreClientFunction);
module.exports=router