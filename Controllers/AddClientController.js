const AddClientSchema = require('../Schema/AddClientSchema');
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
  console.log(req.body);
  const {id}=req.body.array[2]
  const { Bride_Name,
    Groom_Name,
    Bride_s_House_Address,
    Groom_s_House_Address,
    Email_Id,
    PhoneNo,
    Booking_confirmed,
    Payment_Status,
    POC,}=req.body.array[0]
    
  const {locationSelect,
    travelBySelect,
    photoGrapher,
    CinematographerSelect,
    droneSelect,
    preWeddingSelect,
    albumSelect,
    AlbumType,
    promoSelect,
    longFilmSelect,
    reelsSelect,
    harddriveSelect,
    addDates,
    eventType,
    delieverable}=req.body.array[1]
    console.log(
      Bride_Name,
      Groom_Name,
      Bride_s_House_Address,
      Groom_s_House_Address,
      Email_Id,
      PhoneNo,
      Booking_confirmed,
      Payment_Status,
      POC,
      
      travelBySelect,
      photoGrapher,
      CinematographerSelect,
      droneSelect,
      preWeddingSelect,
      albumSelect,
      AlbumType,
      promoSelect,
      longFilmSelect,
      reelsSelect,
      harddriveSelect,
      addDates,
      eventType,
      delieverable,"dataaa"
    );
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
      events: {
        id,
        locationSelect,
        travelBySelect,
        photoGrapher,
        CinematographerSelect,
        droneSelect,
        preWeddingSelect,
        albumSelect,
        AlbumType,
        promoSelect,
        longFilmSelect,
        reelsSelect,
        harddriveSelect,
        // addDates,
        eventType,
        delieverable,
      },
    });
    res.status(200).json({message:'Client Added SucccessFully',data:client});
    console.log("clientAddedSuccessfully")
    await client.save();
  } catch (error) {
    console.log(error, 'error');
  }
};
module.exports = {
  AddClientFunction,
  AddMoreClientFunction,
};
