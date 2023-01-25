const mongoose=require('mongoose')

const AttendenceSchema=mongoose.Schema({
    userID:{
        type:String
    },
    checkInTimeSettings:{
        type:String
    },
    checkOutTimeSettings:{
        type:String
    },
    daysSelected:{
        type:Array
    }

})
const AttendenceModel=mongoose.model("Attendence",AttendenceSchema)
module.exports = AttendenceModel;