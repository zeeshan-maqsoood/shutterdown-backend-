const mongoose = require('mongoose');
const CalenderData = mongoose.Schema({
  userID: {
    type: String,
  },
  eventsId: {
    type: String,
  },
  client: {
    BrideName: {
      type: String,
    },
    GroomName: {
      type: String,
    },
  },
  EditorId: {
    type: String,
  },
  Editor: {
    type: String,
  },
  WeddingDate: {
    type: String,
  },
  companyDate: {
    type: String,
  },
  clientDate: {
    type: String,
  },
  Status: {
    type: String,
  },
  ClientRevision: {
    type: String,
  },
  Suggestion: {
    type: String,
  },
});

const photoGrapherModel = mongoose.model(
  'PhotoGrapherDeliverable',
  CalenderData
);

module.exports = photoGrapherModel;
