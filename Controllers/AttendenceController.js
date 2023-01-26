const userModel=require('../Schema/userSchema')
const AttendenceSchema=require('../Schema/AttendenceSchema')
const EditorShooterModel=require('../Schema/EditorShooterAttendenceSchema')
const EditorData=async(req,res)=>{
    console.log("function Calls")
    console.log(req.params,"paramsss")
    try {
        const AttendenceData=await userModel.find({rollSelect:"Shooter"})
       const AttendenceEditorData=await userModel.find({rollSelect:"Editor"})
       res.status(200).json({AttendenceData:AttendenceData,AttendenceEditorData:AttendenceEditorData})
    } catch (error) {
        res.status(500).json(error)
    }
}

const PostAttendenceData=async(req,res)=>{
    console.log(req.body,"body")
    const array=[req.body.data.daysSelected]
   
    try {
        const UserAttendence=await AttendenceSchema.find({
            userID:req.body.data.userID
        })
        if (UserAttendence.length===0) {
          const UserAttendenceData=await AttendenceSchema({
                userID:req.body.data.userID,
                checkInTimeSettings:req.body.data.checkInTime,
                checkOutTimeSettings:req.body.data.checkOutTime,
                daysSelected:req.body.data.daysSelected
            })

         const saved=   await UserAttendenceData.save()
        if (saved) {
            const allData=await UserAttendenceData.find()
            console.log(allData,"allData")
        }
            
        }
        else {
       const userData=await AttendenceSchema.findOneAndUpdate({
                userID:req.body.data.userID
            },{
                userID:req.body.data.userID,
                checkInTime:req.body.data.checkTIme,
                checkOutTime:req.body.data.checkOutTime,
                daysSelected:req.body.data.daysSelected
            })
          
            if (userData) {
            const data=    await AttendenceSchema.find()
           res.status(200).json(data)
            }
        }
    } catch (error) {
        
    }
}

const getAttendenceData=async(req,res)=>{
    console.log(req.params,"params")
try {
    const allData=await AttendenceSchema.find({userID:req.params.id})
    res.status(200).json(allData)
    
} catch (error) {
    res.status(500).json(error)
}
}

const managerAttendenceData=async(req,res)=>{
    console.log(req.params,"paramsdfsdfsdfsdfsdf")
    try {
        const AttendenceData=await EditorShooterModel.find()
        const ShooterData=await userModel.find({rollSelect:"Shooter"})
        const EditorData=await userModel.find({rollSelect:"Editor"})
        res.status(200).json({AttendenceData:AttendenceData,ShooterData:ShooterData,EditorData:EditorData})
    } catch (error) {
        
    }
}

module.exports={ EditorData,PostAttendenceData,getAttendenceData,managerAttendenceData  } 