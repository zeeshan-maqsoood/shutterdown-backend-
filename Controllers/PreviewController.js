const localStorage = require('localStorage');
const AddClientSchema = require('../Schema/AddClientSchema');
const dummySchema = require('../Schema/DummySchema');
const PreviewClientFunction = async (req, res) => {
  console.log(req.body)
 try {
    let DummyIDArray=[]
    const arrayId=req.body.data
    console.log(arrayId)
    for (let index = 0; index < arrayId.length; index++) {
        const element = arrayId[index];
        const dummyIdData=await dummySchema.findById({_id:element.ID})
        DummyIDArray.push(dummyIdData)
       }
       console.log(DummyIDArray,"DummyArray")
   res.status(200).json({data:DummyIDArray})
 } catch (error) {
    res.status(500).json(error)
 }

};

module.exports = { PreviewClientFunction };
