const mongoose=require("mongoose")

const CalenderData=mongoose.Schema({
    CoupleLocation:{
        type:String,
    },
    Date:{
        type:String,
    },
    shootDirector:{
        type:String
    },
    photoGrapher:{
        type:String
    },
    cinematoGrapher:{
        type:String
    },
    DroneFlyer:{
        type:String
    },
    Manager:{
        type:String
    },
    Assistant:{
        type:String
    },SameDayVideos:{
        type:String
    },sameDayPhoto:{
        type:String
    }
})

const ClientModel=mongoose.model("AssignTeam",CalenderData)

module.exports=ClientModel