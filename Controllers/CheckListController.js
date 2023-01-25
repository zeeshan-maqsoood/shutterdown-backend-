const AddClientSchema = require('../Schema/AddClientSchema');
const CheckListSchema = require('../Schema/CheckListSchema');
const CheckListData = async (req, res) => {
  console.log(req.params, 'params');
  try {
    const ClientListData = await AddClientSchema.find({
      userID: req.params.id,
    });
    res.status(200).json(ClientListData);
  } catch (error) {}
};
const CheckListDataPost = async (req, res) => {
  console.log(req.body, 'body');
  try {
    const CheckListData = await CheckListSchema.find({ id: req.body.id });
    console.log(CheckListData, 'CheckListData');
    if (CheckListData.length === 0) {
      const CheckListDatas = await CheckListSchema({
        id: req.body.id,
        client: {
          BrideName: req.body.data.BrideName,
          GroomName: req.body.data.GroomName,
        },
        WhatsAppAccount: req.body.data.WhatsAppGroup,
        LightSopSentDate: req.body.data.WhatsAppDate,
        QuesnrSentDate: req.body.data.QuesnrDate,
        iternaryCollection: req.body.data.collection,
      });
      // console.log(CheckListData, 'CheckListData');
      await CheckListDatas.save();
      console.log('saved');
      res.status(200).json('it is saved');
    } else {
      const findIddata = await CheckListSchema.findOneAndUpdate(
        { id: req.body.id },
        {
          id: req.body.id,
          Client: {
            BrideName: req.body.data.BrideName,
            GroomName: req.body.data.GroomName,
          },
          WhatsAppAccount: req.body.data.WhatsAppGroup,
          LightSopSentDate: req.body.data.WhatsAppDate,
          QuesnrSentDate: req.body.data.QuesnrDate,
          iternaryCollection: req.body.data.collection,
        }
      );
      res.status(200).json("it is Updated")
    }
    // await CheckListData.save();
  } catch (error) {
    console.log(error, 'error');
  }
};
module.exports = { CheckListData, CheckListDataPost };
