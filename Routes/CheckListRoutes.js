const express = require('express');
const router = express.Router();
const CheckListController = require('../Controllers/CheckListController');
router.get('/MyProfile/CheckLists/:id', CheckListController.CheckListData);
router.post('/MyProfile/CheckLists', CheckListController.CheckListDataPost);
module.exports = router;
