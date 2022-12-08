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
    Email_Id,
    PhoneNo,
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
      Email_Id,
      PhoneNo,
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
  console.log(req.body[1],"body")
  // console.log(req.body)

  // array.filter((data)=>{
  //  console.log(DataBaseData._id===data.id)
  // })

  //  console.log()
  //  console.log(dummyData,"dummyData")
  // const array=req.body

  //  const data= array.map(async(id)=>{

  // })
  // const dummyData=await DummySchema.find

  // resDatas.filter((data)=>{

  // })
  //  const resData = await DummySchema.findOne({_id:data.id});
  //  console.log(resData,"resData")

  //  const resDatas = await DummySchema.find({ bo });
  //  console.log(data,"data")
  // console.log(data,"data")
  // console.log(dummyData,"dummyData")
  //   const filterData=resData.find((id)=>{
  // console.log(id===req.body.id,"filterDataId")
  //   })
  //   console.log(filterData,"filterData")
  // console.log(resData)
  //   const array=[req.body.id,req.body.id2]
  //  const Client = await DummySchema.find(Array
  //  );
  //  console.log(Client,"client")
  // locationSelect,
  // travelBySelect,
  // photoGrapher,
  // CinematographerSelect,
  // droneSelect,
  // sameDaySelect,
  // albumSelect,
  // AlbumType,
  // promoSelect,
  // longFilmSelect,
  // reelsSelect,
  // harddriveSelect,
  // eventType,
  // radioDeliverables,
  // clientSuggestions,
  // dates,
  // album2Type,
  // album2Select,
  // id,
  // const {id}=req.body.array[2]

  // const {locationSelect,
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
  //   delieverable}=req.body.array[1]
  //   console.log(
  //     Bride_Name,
  //     Groom_Name,
  //     Bride_s_House_Address,
  //     Groom_s_House_Address,
  //     Email_Id,
  //     PhoneNo,
  //     Booking_confirmed,
  //     Payment_Status,
  //     POC,

  //     travelBySelect,
  //     photoGrapher,
  //     CinematographerSelect,
  //     droneSelect,
  //     preWeddingSelect,
  //     albumSelect,
  //     AlbumType,
  //     promoSelect,
  //     longFilmSelect,
  //     reelsSelect,
  //     harddriveSelect,
  //     addDates,
  //     eventType,
  //     delieverable,"dataaa"
  //   );
  // Bride_Name,
  // Groom_Name,
  // Bride_s_House_Address,
  // Groom_s_House_Address,
  // Email_Id,
  // PhoneNo,
  // Booking_confirmed,
  // Payment_Status,
  // POC,
  //   locationSelect,
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
  // }
  try {
    
    const array = req.body;

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
        const DummyId = await DummySchema.findOne({ _id: element._id });
        dummyDataArray.push(DummyId);
        inputData.push(element.Bride_Name)
        console.log(element.Bride_Name,"brideName")
      }
    }
    // console.log(inputData,"inpuytData")
    const { Bride_Name, Groom_Name } = inputData;
 
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
    // } = dummyDataArray;
    console.log(dummyDataArray, 'dummyData');
    const client = await AddClientSchema({
      Bride_Name,
      // Groom_Name,
      // Bride_s_House_Address,
      // Groom_s_House_Address,
      // Email_Id,
      // PhoneNo,
      // Booking_confirmed,
      // Payment_Status,
      // POC,
      events: dummyDataArray,
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
