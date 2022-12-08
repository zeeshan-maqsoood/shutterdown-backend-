const mongoose = require('mongoose');

const dummySchema = mongoose.Schema({
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
  sameDaySelec: {
    type: String,
  },
  albumArray: Array,

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
  eventType: {
    type: String,
  },
  //   radioDeliverables: {
  //     type: String,
  //   },
  clientSuggestions: {
    type: String,
  },
  dates: {
    type: String,
  },
  album2Type: {
    type: String,
  },
  clientSuggestions: {
    type: String,
  },
  album2Select: {
    type: String,
  },
  id: {
    type: String,
  },
});

const DummyModel = mongoose.model('Dummy', dummySchema);
module.exports = DummyModel;