const express = require('express');
const router = express.Router();
const CalenderViewController = require('../Controllers/ClientCalenderViewController');

router.get(
  '/MyProfile/Calender/View/:id',
  CalenderViewController.ClientCalenderViewFunction
);
router.post(
  '/MyProfile/Calender/View',
  CalenderViewController.clientModelFunction
);
// router.post(
//   '/MyProfile/Calender/View/',
//   CalenderViewController.
// );

module.exports = router;
