const mongoose = require('mongoose');
const ClientSchema = mongoose.Schema({
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
  phoneNo: {
    type: String,
  },
  Email_Id: {
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
  locationSelect: {
    type: String,
  },
  travelBySelect: {
    type: String,
  },
  photoGrapher: {
    type: String,
  },
  CinematographerSelect: {
    type: String,
  },
  droneSelect: {
    type: String,
  },
  preWeddingSelect: {
    type: String,

  },
  albumSelect: {
    type: String,

  },
  AlbumType: {
    type: String,

  },
  promoSelect: {
    type: String,

  },
  longFilmSelect: {
    type: String,
  },
  reelsSelect: {
    type: String,
  },
  harddriveSelect: {
    type: String,
  },
  addDates: {
    type: String,
  },
  eventType: {
    type: String,
  },
  delieverable: {
    type: String,
    //   // required:true
  },
});
const ClientModel = mongoose.model('Client', ClientSchema);
module.exports = ClientModel;
