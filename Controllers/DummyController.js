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
 albumArray,
  promoSelect,
  longFilmSelect,
  reelsSelect,
  harddriveSelect,
  eventType,
  radioDeliverables,
  clientSuggestions,
  dates,
  
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
      albumArray,
      // AlbumType,
      promoSelect,
      longFilmSelect,
      reelsSelect,
      harddriveSelect,
      // addDates,
      eventType,
      clientSuggestions,
      // delieverable,
    });
    const addDummyData=await DummySchema.find()
   console.log(addDummyData,"addDummyData")
    res.status(200).json({message:'Client Added SucccessFully',data:dummyTable,allData:addDummyData});
    console.log("clientAddedSuccessfully")
    await dummyTable.save();
  } catch (error) {
    console.log(error, 'error');
  }
}
const EditDummyTableFunction = async (req, res) => {
console.log(req.params,"params")
 const {
   locationSelect,
   travelBySelect,
   photoGrapher,
   CinematographerSelect,
   droneSelect,
   albumSelect,
   promoSelect,
   longFilmSelect,
   reelsSelect,
   harddriveSelect,
   eventType,
   clientSuggestions,
 } = req.body;
 try {
  const dummyTable = await DummySchema.findById( { _id: req.params.id });

 
 dummyTable.locationSelect=req.body.locationSelect
 dummyTable.travelBySelect = travelBySelect;
 dummyTable.photoGrapher = photoGrapher;
 dummyTable.CinematographerSelect = CinematographerSelect;
 dummyTable.droneSelect = droneSelect;
 dummyTable.albumSelect = albumSelect;
 dummyTable.promoSelect = promoSelect;
  dummyTable.longFilmSelect = longFilmSelect;
dummyTable.reelsSelect = reelsSelect;
dummyTable.harddriveSelect = harddriveSelect;
dummyTable.eventType = eventType;
dummyTable.clientSuggestions = clientSuggestions;
 
 const updatedData=await DummySchema.findByIdAndUpdate({_id:dummyTable._id},dummyTable)
 if (updatedData) {
  
   res.status(200).json('YOur Data has been updated');
 }
    console.log(updatedData,"updatedData")


  
    
  
 } catch (error) {
  res.status(500).json(error)
  console.log(error,"error")
 }
};
  module.exports = { DummyTableFunction, EditDummyTableFunction };