const express = require('express');
const router = express.Router();
const AttendenceController = require('../Controllers/AttendenceController');
// router.get(
//   '/MyProfile/AttendenceSettings/:id',
//   AttendenceController.EditorData
// );
router.post('/MyProfile/AttendenceSettings',AttendenceController.PostAttendenceData)
router.get('/MyProfile/AttendenceSettings/:id',AttendenceController.getAttendenceData)
module.exports = router;
