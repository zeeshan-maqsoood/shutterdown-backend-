const express=require("express")
const router=express.Router()
const delivarableController=require("../Controllers/DeliverableController")


router.get('/MyProfile/Deliverables/Cinematography/:id',delivarableController.getCinematographerData);
router.get(
  '/MyProfile/Deliverables/Cinematography',
  delivarableController.getEditorRule
);
router.get(
  '/MyProfile/Deliverables/Albums/:id',
  delivarableController.albumsData
);
router.get(
  '/MyProfile/Deliverables/Photos/:id',
  delivarableController.getPhotosDataa
);
router.post(
  '/MyProfile/Deliverables/Cinematography',
  delivarableController.DeliverableDataPost
);
module.exports=router