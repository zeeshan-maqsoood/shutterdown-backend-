const express=require("express")
const ClientController=require("../Controllers/AddClientController")
const dummyController=require("../Controllers/DummyController")
const router=express.Router();

router.post('/AddClient/Form-I', ClientController.AddClientFunction);
router.post('/AddClient/Preview', ClientController.AddMoreClientFunction);
router.post('/AddClient/Form-II', dummyController.DummyTableFunction);
module.exports=router