
const AddClientSchema = require('../Schema/AddClientSchema');
const getViewClientData = async (req, res) => {
  
  console.log('checkkk',req.params)
  try {
    const clientSchema = await AddClientSchema.find({userID:req.params.id});
    console.log(clientSchema,"add")
    if (clientSchema) {
      res.status(200).json(clientSchema);
    }
  } catch (error) {
    res.status(404).json(error);
    console.log(error, 'error');
  }

};

const getClientInfoData = async (req, res) => {
  console.log(req.params,"paramssss")
  try {
    const clientInfoData = await AddClientSchema.find({
      'events._id': {$eq:req.params.id},
    });
    console.log(clientInfoData,'clientInfoData')
    if (clientInfoData) {
      res.status(200).json(clientInfoData);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
const viewClient1Data=async(req,res)=>{
  console.log(req.params,"paramsssss")
  try {
    const clientIdData=await AddClientSchema.find({"events._id":{$eq:req.params.id}})
    console.log(clientIdData,'clientIdData')
 
  } catch (error) {
    
  }
}
module.exports = { getViewClientData, getClientInfoData,viewClient1Data };
