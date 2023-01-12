const addClientSchema = require('../Schema/AddClientSchema');
const dayjs = require('dayjs');
const ClientCalenderViewFunction = async (req, res) => {
  console.log(req.params, 'paramssss');
  try {
    const user = await addClientSchema.find({ userID: req.params.id });
    console.log(user, 'userrrrrrr');
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const clientModelFunction = async (req, res) => {
  console.log(req.params, 'params');
  console.log(req.body, 'bodysss');
  try {
    const allDates = await addClientSchema.find({
      'events.dates': { $eq: dayjs(req.body.data).format('YYYY-MM-DD') },
    });
    console.log(allDates, 'allDates');
    res.status(200).json({ message: 'selected dates', data: { allDates } });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { ClientCalenderViewFunction, clientModelFunction };
