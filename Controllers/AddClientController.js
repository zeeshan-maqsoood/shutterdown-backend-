const AddClientSchema = require('../Schema/AddClientSchema');
const DummySchema=require("../Schema/DummySchema")
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
const AddClientFunction = async (req, res) => {
console.log(req.body,"body")
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

  console.log(req.body)
  const array=req.body
  console.log(array,"array")
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
  // try {
  //   const client = await AddClientSchema({
  //     Bride_Name,
  //     Groom_Name,
  //     Bride_s_House_Address,
  //     Groom_s_House_Address,
  //     Email_Id,
  //     PhoneNo,
  //     Booking_confirmed,
  //     Payment_Status,
  //     POC,
  //     events: dummyData,
  //   });
  //   res.status(200).json({message:'Client Added SucccessFully',data:client});
  //   console.log("clientAddedSuccessfully")
    
  //   await client.save();
  

  // } catch (error) {
  //   console.log(error, 'error');
  // }
};

module.exports = {
  AddClientFunction,
  AddMoreClientFunction,
};
