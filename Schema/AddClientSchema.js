const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
  userID: {
    type: String,
  },
  Bride_Name: {
    type: String,
  },
  Groom_Name: {
    type: String,
  },
  Bride_s_House_Address: {
    type: String,
  },
  Groom_s_House_Address: {
    type: String,
  },
  phone_Number: {
    type: String,
  },
  EmailID: {
    type: String,
  },
  Booking_confirmed: {
    type: String,
  },
  Payment_Status: {
    type: String,
  },
  POC: {
    type: String,
  },
  events: Array,
});
const ClientModel = mongoose.model('Booking', ClientSchema);
module.exports = ClientModel;
