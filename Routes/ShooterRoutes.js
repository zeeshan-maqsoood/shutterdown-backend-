const express = require('express');
const router = express.Router();
const ShooterController = require('../Controllers/ShooterController');
router.get(
  `/photographer-CalenderView/View/:id`,
  ShooterController.ShooterCalenderView
);
router.get('/Photographer/DailyTasks/:id',ShooterController.ShooterTaskView)
module.exports = router;
