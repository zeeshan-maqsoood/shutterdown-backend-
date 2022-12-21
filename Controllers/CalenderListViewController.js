const addClientSchema = require('../Schema/AddClientSchema');
const userSchema = require('../Schema/userSchema');
const ClientListViewController = async (req, res) => {
  try {
    const clientEvents = await addClientSchema.find({
      userID: req.params.id,
    });
    console.log(clientEvents, 'clientEvents');
    const shooterData = await userSchema.find({
      rollSelect: 'Shooter',
    });
    console.log(shooterData, 'shooterData');
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

    res.status(200).json({
      message: 'recieve Successfully',
      data: clientEvents,
      userData: data,
    });
  } catch (error) {
    res.status(500).json('not added');
  }
};

module.exports = { ClientListViewController };
