const mongoose=require("mongoose")

const CalenderData = mongoose.Schema({
  cinematoGrapher: {
    userID:{
      type:String,
    },
    eventsId:{
      type:String
    },
    client: {
      type: String,
    },
    Deliverable: {
      type: String,
    },
    Editor: {
      type: String,
    },
    WeddingData: {
        type:String
    },
    companyDeadline: {
      type: String,
    },
    ClientDeadline: {
      type: String,
    },
    Status: {
      type: String,
    },
    Suggestions: {
      type: String,
    },
    ClientRevision: {
      type: String,
    },
  },
  photoGrapher: {
    client: {
      type: String,
    },
    Deliverable: {
      type: String,
    },
    Editor: {
      type: String,
    },
    WeddingData: {},
    companyDeadline: {
      type: String,
    },
    ClientDeadline: {
      type: String,
    },
    Status: {
      type: String,
    },
    Suggestions: {
      type: String,
    },
    ClientRevision: {
      type: String,
    },
  },
  Albums:{
    client:{
      type:String
    },
  },

});

const ClientModel=mongoose.model("AssignTeam",CalenderData)

module.exports=ClientModel