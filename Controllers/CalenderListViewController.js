const addClientSchema = require('../Schema/AddClientSchema');
const userSchema = require('../Schema/userSchema');
const ClientListViewController = async (req, res) => {
  try {
    const clientEvents = await addClientSchema.find({
      userID: req.params.id,
    });
    const shooterData = await userSchema.find({
      rollSelect: 'Shooter',
    });
    let data = [];
    for (let i = 0; i < shooterData.length; i++) {
      data.push({
        firstName: shooterData[i].firstName,
        lastName: shooterData[i].lastName,
        email: shooterData[i].email,
        phoneNo: shooterData[i].phoneNo,
        password: shooterData[i].password,
        rollSelect: shooterData[i].rollSelect,
        checked: false,
      });
    }
    const managerData = await userSchema.find({
      rollSelect: 'Manager',
    });
    let data_ = [];
    for (let i = 0; i < managerData.length; i++) {
      data_.push({
        firstName: managerData[i].firstName,
        lastName: managerData[i].lastName,
        email: managerData[i].email,
        phoneNo: managerData[i].phoneNo,
      });
    }
    console.log('clientEvents',clientEvents)
    res.status(200).json({
      message: 'recieve Successfully',
      data: clientEvents,
      userData: data,
      managerData:data_
    });
  } catch (error) {
    res.status(500).json('not added');
  }
};

module.exports = { ClientListViewController };
