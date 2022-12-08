const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
  Bride_Name: {
    type: String,
  },
  // Groom_Name: {
  //   type: String,
  // },
  // Bride_s_House_Address: {
  //   type: String,
  // },
  // Groom_s_House_Address: {
  //   type: String,
  // },
  // phoneNo: {
  //   type: String,
  // },
  // Email_Id: {
  //   type: String,
  // },
  // Booking_confirmed: {
  //   type: String,
  // },
  // Payment_Status: {
  //   type: String,
  // },
  // POC: {
  //   type: String,
  // },
 events:Array

 
});
const ClientModel = mongoose.model('Booking', ClientSchema);
module.exports = ClientModel;
