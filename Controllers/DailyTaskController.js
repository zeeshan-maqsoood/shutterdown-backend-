const addClientSchema = require('../Schema/AddClientSchema');
const taskSchema = require('../Schema/TaskSchema');
const userSchema = require('../Schema/userSchema');
const handleDailyTaskGetRequest = async (req, res) => {
  try {
    const ClientData = await addClientSchema.find({ userID: req.params.id });
    const user = await userSchema.find({ rollSelect: 'Editor' });

    res.status(200).json({ ClientData: ClientData, userData: user });
  } catch (error) {
    res.status(404).json('fail to get access');
  }
};

const handleDailyTaskPostRequest = async (req, res) => {
  console.log(req.body, 'body');
  const {
    brideName,
    groomName,
    companyDate,
    completionDate,
    assignto,
    assignBy,
    taskName,
  } = req.body.data;
  const id = assignto.split(',');
  const _id = id[1];
  const name = id[0];
  console.log(_id, '_id');
  try {
    const taskData = await taskSchema({
      BrideName: brideName,
      GroomName: groomName,
      companyDate: companyDate,
      completionDate: completionDate,
      assignTo: {
        id: _id,
        name: name,
      },
      assignBy,
      taskName: taskName,
    });
    await taskData.save();
   
    res.status(200).json('successFully Added');
  } catch (error) {
    res.status(404).json('not added');
  }
};

const getTaskData = async (req, res) => {
  try {
    const taskData = await taskSchema.find();
    const Editor=await userSchema.find({rollSelect:"Editor"})
    const manager=await userSchema.find({rollSelect:"Manager"})
    res.status(200).json({taskData:taskData,Editor:Editor,ManagerData:manager});
  } catch (error) {
    console.log(taskData, 'taskData');
  }
};
const updateTaskData=async(req,res)=>{
  // console.log(req.params,"params")
  // console.log(req.body,"body")
  try {
    const idData=await taskSchema.findById({_id:req.params.id})
    console.log(idData.assignTo.id,"idData")
    const data=await taskSchema.findByIdAndUpdate({_id:req.params.id},{
      GroomName:req.body.data.client.BrideName,
      GroomName:req.body.data.client.GroomName,
      companyDate:req.body.data.companyDate,
      completionDate:req.body.data.completionDate,
      assignTo:{
        name:idData.assignTo.name,
        id:idData.assignTo.id
      },
      assignBy:req.body.data.assignBySelect,
      taskName:req.body.data.taskName
    })
    res.status(200).json(data)
  } catch (error) {
    
  }
}
module.exports = {
  handleDailyTaskGetRequest,
  handleDailyTaskPostRequest,
  getTaskData,
  updateTaskData
};
