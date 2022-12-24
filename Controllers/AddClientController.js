const AddClientSchema = require('../Schema/AddClientSchema');
const DummySchema = require('../Schema/DummySchema');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
const AddClientFunction = async (req, res) => {
  console.log(req.body, 'body');
  const {
    Bride_Name,
    Groom_Name,
    Bride_s_House_Address,
    Groom_s_House_Address,
    EmailID,
    phone_Number,
    Booking_confirmed,
    Payment_Status,
    POC,
  } = req.body.data;
  try {
    const client = await AddClientSchema({
      Bride_Name,
      Groom_Name,
      Bride_s_House_Address,
      Groom_s_House_Address,
      EmailID,
      phone_Number,
      Booking_confirmed,
      Payment_Status,
      POC,
    });
    res.status(200).json('Client Added SucccessFully');
    await client.save();
  } catch (error) {
    console.log(error, 'error');
  }
};

const AddMoreClientFunction = async (req, res) => {
  console.log(req.body,"addclentBody")
  console.log(req.body.data.info2,"body")
  
  try {
    const {
      userEmail,
      Bride_Name,
      Groom_Name,
      Bride_s_House_Address,
      Groom_s_House_Address,
      Email_Id,
      phone_Number,
      Booking_confirmed,
      Payment_Status,
      POC,
    } = req.body.data.info1;

    const userID=userEmail
    const array = req.body.data.info2;

    let DataBaseId = [];
    const inputData = [];
    array.map((data) => {
      DataBaseId.push(data._id);
      inputData.push(data.Bride_Name);
    });
    
    console.log(DataBaseId, 'id');
    // console.log(inputData, 'inputData');
    console.log(array.Bride_Name, 'array');
    var DataBaseData = [];
    const dummyData = await DummySchema.find();
    let dummyDataArray = [];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element) {
        const DummyId = await DummySchema.findByIdAndDelete({ _id: element._id });
       
      }
    }
    console.log(inputData,"inpuytData")
 
 
    // const {
    //   travelBySelect,
    //   photoGrapher,
    //   CinematographerSelect,
    //   droneSelect,
    //   preWeddingSelect,
    //   albumSelect,
    //   AlbumType,
    //   promoSelect,
    //   longFilmSelect,
    //   reelsSelect,
    //   harddriveSelect,
    //   addDates,
    //   eventType,
    //   delieverable,
    // // } = dummyDataArray;
    // console.log(dummyDataArray, 'dummyData');
    const client = await AddClientSchema({
      userID,
      Bride_Name,
      Groom_Name,
      Bride_s_House_Address,
      Groom_s_House_Address,
      Email_Id,
      phone_Number,
      Booking_confirmed,
      Payment_Status,
      POC,
      events: req.body.data.info2,
    });
    res
      .status(200)
      .json({ message: 'Client Added SucccessFully', data: client });
    console.log('clientAddedSuccessfully');

    await client.save();
  } catch (error) {
    console.log(error, 'error');
  }
};

module.exports = {
  AddClientFunction,
  AddMoreClientFunction,
};
