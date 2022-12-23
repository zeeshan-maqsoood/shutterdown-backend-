const AddClientSchema = require('../Schema/AddClientSchema');
const getViewClientData = async (req, res) => {
  try {
    const AddClientSchama = await AddClientSchema.find();
    if (AddClientSchema) {
      res.status(200).json(AddClientSchama);
    }
  } catch (error) {
    console.log(error, 'error');
  }
};

const getClientInfoData = async (req, res) => {
  try {
    const clientInfoData = await AddClientSchema.findById({
      _id: req.params.id,
    });
    if (clientInfoData) {
      res.status(200).json(clientInfoData);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = { getViewClientData, getClientInfoData };
