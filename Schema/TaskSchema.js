const mongoose=require('mongoose')
const taskSchema=mongoose.Schema({
    BrideName:{
        type:String
    },
    GroomName:{
        type:String
    },
    companyDate:{
        type:String
    },
    completionDate:{
        type:String
    },
    assignTo:{
        type:String
    },
    assignBy:{
        type:String
    },
    taskName:{
        type:String
    }
})


const taskModel=mongoose.model("task",taskSchema)
module.exports=taskModel