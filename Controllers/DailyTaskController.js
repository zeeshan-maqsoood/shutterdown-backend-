const addClientSchema = require('../Schema/AddClientSchema');
const taskSchema = require('../Schema/TaskSchema');
const userSchema = require('../Schema/userSchema');
const handleDailyTaskGetRequest = async (req, res) => {
  try {
    const ClientData = await addClientSchema.find({ userID: req.params.id });
    const user = await userSchema.find({ rollSelect: 'Shooter' });

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
    res.status(200).json(taskData);
  } catch (error) {
    console.log(taskData, 'taskData');
  }
};

module.exports = {
  handleDailyTaskGetRequest,
  handleDailyTaskPostRequest,
  getTaskData,
};
