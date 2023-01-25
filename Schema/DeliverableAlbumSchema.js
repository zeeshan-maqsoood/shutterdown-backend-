const mongoose = require('mongoose');

const CalenderData = mongoose.Schema({
  
 
    userID: {
      type: String,
    },
    eventsId: {
      type: String,
    },
    client: {
     BrideName:{
        type:String
     },
     GroomName:{
        type:String
     }
    },
    EditorId:{
      type:String
    },
    WeddingDate:{
      type:String
    },
    Editor: {
      type: String,
    },
    Status: {
      type: String,
    },
    Suggestion:{
      type:String
    }
  
});

const ClientModel = mongoose.model('AlbumsDeliverable', CalenderData);

module.exports = ClientModel;
