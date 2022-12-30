
const addClientSchema=require('../Schema/AddClientSchema')
const taskSchema=require('../Schema/TaskSchema')
const handleDailyTaskGetRequest=async(req,res)=>{
try {
    const ClientData= await addClientSchema.find({userID:req.params.id})
    
    res.status(200).json(ClientData)
} catch (error) {
    res.status(404).json("fail to get access")
}
}


const handleDailyTaskPostRequest=async(req,res)=>{
    console.log(req.body,"body")
    const {brideName,groomName,companyDate,completionDate,assignto,assignBy,taskName}=req.body.data
try {
    const taskData=await taskSchema({
        BrideName:brideName,
        GroomName:groomName,
        companyDate:companyDate,
        completionDate:completionDate,
        assignTo:assignto,
        assignBy,
        taskName:taskName
    })
await taskData.save()
res.status(200).json("successFully Added")
    
} catch (error) {
    res.status(404).json("not added")
}
}


const getTaskData=async(req,res)=>{
    try {
        const taskData=await taskSchema.find()
        res.status(200).json(taskData)
    } catch (error) {
        console.log(taskData,"taskData")
    }

}

module.exports={handleDailyTaskGetRequest,handleDailyTaskPostRequest,getTaskData}