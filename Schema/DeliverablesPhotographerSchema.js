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

    // Deliverable: {
    //   type: String,
    // },
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
    // Suggestions: {
    //   type: String,
    // },
    ClientRevision: {
      type: String,
    },
  

});

const ClientModel = mongoose.model('PhotoGrapherDeliverable', CalenderData);

module.exports = ClientModel;
