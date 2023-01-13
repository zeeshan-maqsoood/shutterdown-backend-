const DummySchema=require("../Schema/DummySchema")
const dayjs=require("dayjs")
const DummyTableFunction = async (req, res) => {
  console.log(req.body.data.form2Data[0],"body")
  const array1=[req.body.data.form2Data[0]]
  const array = [];
  console.log(array1,"array1");
  // console.log(req.body.data.form2Data[0],"body");
  

  const {
    locationSelect,
    travelBySelect,
    photoGrapher,
    CinematographerSelect,
    droneSelect,
    sameDaySelect,
    albumSelect,
    albumArray,
    promoSelect,
    longFilmSelect,
    reelsSelect,
    harddriveSelect,
    tentative,
    eventType,
    radioDeliverables,
    clientSuggestions,
    dates,
    droneFlyerName,
    photoGrapherName,
    cinematoGrapherName,
    shootDirectorName,
    managerName,
    assistantName,
    id,
    sameVideoSelect,
    checkboxValues
  } = req.body.data.form2Data[0];
  
  try {
    const dummyTable = await DummySchema({
      // id,
      locationSelect,
      travelBySelect,
      photoGrapher,
      CinematographerSelect,
      droneSelect,
      sameDaySelect,
      albumSelect,
      albumArray,
      promoSelect,
      longFilmSelect,
      reelsSelect,
      harddriveSelect,
      tentative,
      eventType,
      radioDeliverables,
      clientSuggestions,
      dates:dayjs(dates).format("YYYY-MM-DD"),
      droneFlyerName,
      photoGrapherName,
      cinematoGrapherName,
      shootDirectorName,
      managerName,
      assistantName,
      sameVideoSelect,
      checkboxValues,
      status:""
    });
   
    
  //  console.log(addDummyData,"addDummyData")
    let save=await dummyTable.save()
    if (save) {
      const addDummyData = await DummySchema.find();
      res
        .status(200)
        .json({
          message: 'Client Added SucccessFully',
          data: dummyTable,
          allData: addDummyData,
        });
      console.log('clientAddedSuccessfully');
      console.log(addDummyData, 'addDummyData'); 
    }
     
    
   
  } catch (error) {
    console.log(error, 'error');
  }
}
const EditDummyTableFunction = async (req, res) => {
  console.log(req.body.data,"body")
console.log(req.params.id,"params")
 
 try {
  const {
    locationSelect,
    travelBySelect,
    photoGrapher,
    albumArray,
    dates,
    radioDeliverables,
    CinematographerSelect,
    droneSelect,
    albumSelect,
    promoSelect,
    longFilmSelect,
    reelsSelect,
    harddriveSelect,
    eventType,
    clientSuggestions,
    sameDaySelect,
    status,
    droneFlyerName,
    photoGrapherName,
    cinematoGrapherName,
    shootDirectorName,
    managerName,
    assistantName,
    
  } = req.body.data.updatedData;
  const dummyTable = await DummySchema.findById(
    { _id: req.body.data.id }
  );

// res.status(200).json("successfullyUPdated")
 dummyTable.locationSelect=locationSelect
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
 dummyTable.photoGrapherName = photoGrapherName
 dummyTable.droneFlyerName = droneFlyerName
 dummyTable.cinematoGrapherName = cinematoGrapherName
 dummyTable.shootDirectorName = shootDirectorName
 dummyTable.managerName = managerName
 dummyTable.assistantName = assistantName
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
const EditDummyDataTableId=async(req,res)=>{
  console.log(req.params)
try {
  const idData = await DummySchema.findByIdAndUpdate(
    { _id: req.params.id },
    {
      locationSelect: 'Lahodsfsdfdsffre',
      travelBySelect: 'Bus',
      photoGrapher: '1',
      CinematographerSelect: 'ddfdfdfdf',
      droneSelect: '2',
      albumSelect: 'RGB',
      promoSelect: 'Yes',
      longFilmSelect: '1',
      reelsSelect: '1',
      harddriveSelect: '1',
      eventType: 'sfsfdsdf',
      clientSuggestions: 'sfsfsfsdfsdf',
    }
  );
 
  
} catch (error) {
  
}
}
  module.exports = {
    DummyTableFunction,
    EditDummyTableFunction,
    EditDummyDataTableId,
  };