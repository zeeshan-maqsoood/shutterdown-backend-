const addClientSchema = require('../Schema/AddClientSchema');
const ClientListViewController = async (req, res) => {
  try {
    const clientEvents = await addClientSchema.find({
      userID: req.params.id,
    });
    console.log(clientEvents, 'clientEvents');
    res
      .status(200)
      .json({ message: 'recieve Successfully', data: clientEvents });
  } catch (error) {
    res.status(500).json('not added');
  }
};

module.exports = { ClientListViewController };
