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
        type:Object
    }

})
const AttendenceModel=mongoose.model("Attendence",AttendenceSchema)
module.exports = AttendenceModel;