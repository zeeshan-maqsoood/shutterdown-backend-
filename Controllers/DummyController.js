const DummySchema=require("../Schema/DummySchema")

const DummyTableFunction = async (req, res) => {
  console.log(req.body.data.form2Data[0],"body");
  const {
    locationSelect,
  travelBySelect,
  photoGrapher,
  CinematographerSelect,
  droneSelect,
  sameDaySelect,
  albumSelect,
  AlbumType,
  promoSelect,
  longFilmSelect,
  reelsSelect,
  harddriveSelect,
  eventType,
  radioDeliverables,
  clientSuggestions,
  dates,
  album2Type,
  album2Select,
  id,
  }=req.body.data.form2Data[0]
  
  try {
    const dummyTable = await DummySchema({
      // id,
      locationSelect,
      travelBySelect,
      photoGrapher,
      CinematographerSelect,
      droneSelect,
      sameDaySelect,
      // preWeddingSelect,
      albumSelect,
      AlbumType,
      promoSelect,
      longFilmSelect,
      reelsSelect,
      harddriveSelect,
      // addDates,
      eventType,
      clientSuggestions,
      // delieverable,
    });
    res.status(200).json({message:'Client Added SucccessFully',data:dummyTable});
    console.log("clientAddedSuccessfully")
    await dummyTable.save();
  } catch (error) {
    console.log(error, 'error');
  }
}
  module.exports={DummyTableFunction}