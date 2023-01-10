const addClientSchema = require('../Schema/AddClientSchema');
const userSchema = require('../Schema/userSchema');
const taskSchema=require('../Schema/TaskSchema')
var events = require('events');

  // console.log(data,"data")
  // const finalFilterData = data.filter((filterData, index) => {
  //   filterData.events.filter((data) => {
  //     // console.log(data,"filterData")
  //     data?.photoGrapherName?.map(async (id) => {
  //       let idArray = id.id;
  //       console.log(idArray, index, 'idArray');
  //       const data1 = await addClientSchema.find({
  //         'events.photoGrapherName.id': { $eq: idArray },
  //       });
  //       console.log(data1, 'data1');
  //     });
  //   });
  // });
  //  console.log(finalFilterData,"finalFilterData")
  //  console.log(data[0].events[0].droneFlyerName,"data")
  // data.filter((data)=>{
  //   console.log(data.events.filter((filterData)=>{
  //     console.log(filterData.droneFlyerName.filter((drone)=>{
  //       console.log(drone,"drone")
  //     }),"filterData")
  //   }),"data")
  // })

//
const ClientListViewController = async (req, res) => {
  console.log(req.params, 'parmas');
  try {
    const clientEvents = await addClientSchema.find({
      userID: req.params.id,
    });
    const shooterData = await userSchema.find({
      rollSelect: 'Shooter',
    });
    let data = [];
    for (let i = 0; i < shooterData.length; i++) {
      data.push({
        _id: shooterData[i]._id,
        firstName: shooterData[i].firstName,
        lastName: shooterData[i].lastName,
        email: shooterData[i].email,
        phoneNo: shooterData[i].phoneNo,
        password: shooterData[i].password,
        rollSelect: shooterData[i].rollSelect,
        checked: false,
      });
    }
    const managerData = await userSchema.find({
      rollSelect: 'Manager',
    });
    let data_ = [];
    for (let i = 0; i < managerData.length; i++) {
      data_.push({
        _id: managerData[i]._id,
        firstName: managerData[i].firstName,
        lastName: managerData[i].lastName,
        email: managerData[i].email,
        phoneNo: managerData[i].phoneNo,
      });
    }
    console.log('clientEvents', clientEvents);
    res.status(200).json({
      message: 'recieve Successfully',
      data: clientEvents,
      userData: data,
      managerData: data_,
    });
  } catch (error) {
    res.status(500).json('not added');
  }
};

const managerList = async (req, res) => {
  const managerData = await userSchema.find({
    rollSelect: 'Manager',
  });
  let data_ = [];
  for (let i = 0; i < managerData.length; i++) {
    data_.push({
      firstName: managerData[i].firstName,
      lastName: managerData[i].lastName,
      email: managerData[i].email,
      phoneNo: managerData[i].phoneNo,
    });
  }
  res.status(200).json({
    message: 'recieve Successfully',
    managerData: data_,
  });
};
const postClientListViewController = async (req, res) => {
  // console.log(req,"params")
  console.log(req.body.data, 'body');
  const {
    _id,
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
    eventType,
    clientSuggestions,
    dates,
    droneFlyerName,
    photoGrapherName,
    cinematoGrapherName,
    shootDirectorName,
    managerName,
    assistantName,
  } = req.body.data;
  // console.log(req.body.data.event.managerName, 'bodydgfdfdf');
  try {
    const clientEvents = await addClientSchema.findById({
      _id: req.body.data.clientId,
    });
    for (let index = 0; index < clientEvents.events.length; index++) {
      const element = clientEvents.events[index];
      console.log(element, 'element');
      console.log(req.body.data.eventId);
      if (element._id == req.body.data.eventId) {
        const data = clientEvents.events.filter((data) => {
          return data._id === req.body.data.eventId;
        });
        const {
          _id,
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
          eventType,
          clientSuggestions,
          dates,
          droneFlyerName,
          photoGrapherName,
          cinematoGrapherName,
          shootDirectorName,
          managerName,
          assistantName,
        } = data[0];
        console.log(req.body.data.clientId, 'locationSelect');
        //  console.log(data[0]._id, 'data');
        const dataUpdated = await addClientSchema.findOneAndUpdate(
          {
            _id: req.body.data.clientId,
            'events._id': req.body.data.eventId,
          },
          {
            $set: {
              'events.$.locationSelect': req.body.data.event.locationSelect,
              'events.$.travelBySelect': req.body.data.event.travelBySelect,
              'events.$.photoGrapher': req.body.data.event.photoGrapher,
              'events.$.CinematographerSelect':
                req.body.data.event.CinematographerSelect,
              'events.$.droneSelect': req.body.data.event.droneSelect,
              'events.$.sameDaySelect': req.body.data.event.sameDaySelect,
              'events.$.albumSelect': req.body.data.event.albumSelect,
              'events.$.albumArray': req.body.data.event.albumArray,
              'events.$.promoSelect': req.body.data.event.promoSelect,

              'events.$.longFilmSelect': req.body.data.event.longFilmSelect,
              'events.$.reelsSelect': req.body.data.event.reelsSelect,

              'events.$.harddriveSelect': req.body.data.event.harddriveSelect,
              'events.$.eventType': req.body.data.event.eventType,
              'events.$.clientSuggestions':
                req.body.data.event.clientSuggestions,
              'events.$.dates': req.body.data.event.dates,
              'events.$.droneFlyerName': req.body.data.event.droneFlyerName,
              'events.$.photoGrapherName': req.body.data.event.photoGrapherName,
              'events.$.cinematoGrapherName':
                req.body.data.event.cinematoGrapherName,
              'events.$.shootDirectorName':
                req.body.data.event.shootDirectorName,
              'events.$.managerName': req.body.data.event.managerName,
              'events.$.assistantName': req.body.data.event.assistantName,
            },
          }
        );
        console.log(dataUpdated, 'dataupdatede');
        const updatedData = {
          _id: data._id,
          locationSelect: locationSelect,
          travelBySelect: travelBySelect,
          photoGrapher: photoGrapher,
          CinematographerSelect: CinematographerSelect,
          droneSelect: droneSelect,
          sameDaySelect: sameDaySelect,
          albumSelect: albumSelect,
          albumArray: albumArray,
          promoSelect: promoSelect,
          longFilmSelect: longFilmSelect,
          reelsSelect: reelsSelect,
          harddriveSelect: harddriveSelect,
          eventType: eventType,
          clientSuggestions: clientSuggestions,
          dates: dates,
          droneFlyerName: droneFlyerName,
          photoGrapherName: photoGrapherName,
          cinematoGrapherName: cinematoGrapherName,
          shootDirectorName: shootDirectorName,
          managerName: managerName,
          assistantName: assistantName,
        };
        // console.log(updatedData, 'updatedclients');
        //  const updatedClients = await addClientSchema.findById(_id:);
        //  console.log(updatedClients,"updatedClient")
      }
      // const eventData=req.body.events.filter((data)=>{
      //   console.log(data,"data")
      // })
      // console.log(eventData,"eventData")
    }
    // const  clientEventsa=await clientEvents.events.findById({
    //   _id:req.body.data.eventId
    // })
    // console.log(clientEvents, 'clientEventssa');
  } catch (error) {}
  // try {

  //   // const clientEvents = await addClientSchema.findById({
  //   //   _id: req.body.data.clientId,
  //   // });
  //   for (let index = 0; index < clientEvents.events.length; index++) {
  //     const element = clientEvents.events[index];
  //     console.log(element,"element");
  //     console.log(req.body.data.eventId);
  //     if (element._id == req.body.data.eventId) {
  //       const data = clientEvents.events.filter((data) => {
  //         return data._id === req.body.data.eventId;
  //       });
  //       const {
  //         _id,
  //         locationSelect,
  //         travelBySelect,
  //         photoGrapher,
  //         CinematographerSelect,
  //         droneSelect,
  //         sameDaySelect,
  //         albumSelect,
  //         albumArray,
  //         promoSelect,
  //         longFilmSelect,
  //         reelsSelect,
  //         harddriveSelect,
  //         eventType,
  //         clientSuggestions,
  //         dates,
  //         droneFlyerName,
  //         photoGrapherName,
  //         cinematoGrapherName,
  //         shootDirectorName,
  //         managerName,
  //         assistantName,
  //       } = data[0];
  //       console.log(locationSelect, 'locationSelect');
  //       //  console.log(data[0]._id, 'data');
  //       const dataUpdated = await addClientSchema.findOneAndUpdate(
  //         {
  //           _id: req.body.data.clientId,
  //           'events._id': req.body.data.eventId,
  //         },
  //         {
  //           $set: {
  //             'events.$.locationSelect': req.body.data.event.locationSelect,
  //             'events.$.travelBySelect': req.body.data.event.travelBySelect,
  //             'events.$.photoGrapher': req.body.data.event.photoGrapher,
  //             'events.$.CinematographerSelect':
  //               req.body.data.event.CinematographerSelect,
  //             'events.$.droneSelect': req.body.data.event.droneSelect,
  //             'events.$.sameDaySelect': req.body.data.event.sameDaySelect,
  //             'events.$.albumSelect': req.body.data.event.albumSelect,
  //             'events.$.albumArray': req.body.data.event.albumArray,
  //             'events.$.promoSelect': req.body.data.event.promoSelect,

  //             'events.$.longFilmSelect': req.body.data.event.longFilmSelect,
  //             'events.$.reelsSelect': req.body.data.event.reelsSelect,

  //             'events.$.harddriveSelect': req.body.data.event.harddriveSelect,
  //             'events.$.eventType': req.body.data.event.eventType,
  //             'events.$.clientSuggestions':
  //               req.body.data.event.clientSuggestions,
  //             'events.$.dates': req.body.data.event.dates,
  //             'events.$.droneFlyerName': req.body.data.event.droneFlyerName,
  //             'events.$.photoGrapherName': req.body.data.event.photoGrapherName,
  //             'events.$.cinematoGrapherName':
  //               req.body.data.event.cinematoGrapherName,
  //             'events.$.shootDirectorName':
  //               req.body.data.event.shootDirectorName,
  //             'events.$.managerName': req.body.data.event.managerName,
  //             'events.$.assistantName': req.body.data.event.assistantName,
  //           },
  //         }
  //       );
  //       console.log(dataUpdated, 'dataupdatede');
  //       const updatedData = {
  //         _id: data._id,
  //         locationSelect: locationSelect,
  //         travelBySelect: travelBySelect,
  //         photoGrapher: photoGrapher,
  //         CinematographerSelect: CinematographerSelect,
  //         droneSelect: droneSelect,
  //         sameDaySelect: sameDaySelect,
  //         albumSelect: albumSelect,
  //         albumArray: albumArray,
  //         promoSelect: promoSelect,
  //         longFilmSelect: longFilmSelect,
  //         reelsSelect: reelsSelect,
  //         harddriveSelect: harddriveSelect,
  //         eventType: eventType,
  //         clientSuggestions: clientSuggestions,
  //         dates: dates,
  //         droneFlyerName: droneFlyerName,
  //         photoGrapherName: photoGrapherName,
  //         cinematoGrapherName: cinematoGrapherName,
  //         shootDirectorName: shootDirectorName,
  //         managerName: managerName,
  //         assistantName: assistantName,
  //       };
  //       console.log(updatedData, 'updatedclients');
  //       //  const updatedClients = await addClientSchema.findById(_id:);
  //       //  console.log(updatedClients,"updatedClient")
  //     }
  //     // const eventData=req.body.events.filter((data)=>{
  //     //   console.log(data,"data")
  //     // })
  //     // console.log(eventData,"eventData")
  //   }
  //   // const  clientEventsa=await clientEvents.events.findById({
  //   //   _id:req.body.data.eventId
  //   // })
  //   // console.log(clientEvents, 'clientEventssa');
  // } catch (error) {}
  // try {
  //   const clientEvents = await addClientSchema.find({
  //     userID: req.params.id,
  //   });
  //   const shooterData = await userSchema.find({
  //     rollSelect: 'Shooter',
  //   });
  //   let data = [];
  //   for (let i = 0; i < shooterData.length; i++) {
  //     data.push({
  //       firstName: shooterData[i].firstName,
  //       lastName: shooterData[i].lastName,
  //       email: shooterData[i].email,
  //       phoneNo: shooterData[i].phoneNo,
  //       password: shooterData[i].password,
  //       rollSelect: shooterData[i].rollSelect,
  //       checked: false,
  //     });
  //   }
  //   const managerData = await userSchema.find({
  //     rollSelect: 'Manager',
  //   });
  //   let data_ = [];
  //   for (let i = 0; i < managerData.length; i++) {
  //     data_.push({
  //       firstName: managerData[i].firstName,
  //       lastName: managerData[i].lastName,
  //       email: managerData[i].email,
  //       phoneNo: managerData[i].phoneNo,
  //     });
  //   }
  //   console.log('clientEvents', clientEvents);
  //   res.status(200).json({
  //     message: 'recieve Successfully',
  //     data: clientEvents,
  //     userData: data,
  //     managerData: data_,
  //   });
  // } catch (error) {
  //   res.status(500).json('not added');
  // }
};

const clientSpecificEvents = async (req, res) => {
  console.log(req.params, 'params');
  try {
    const data = await addClientSchema.findById({
      _id: req.params.id,
    });
    res.status(200).json(data);
    console.log(data, 'datasss');
    // console.log('dfsdfsf');
  } catch (error) {
    res.status(404).json(error, 'error');
  }
};
const preWeddingShoot = async (req, res) => {
  console.log(req.params, 'parmas');
  try {
    const data = await addClientSchema.find({
      userID: req.params.id,
      checkBox: [],
    });
    console.log(data, 'data');
    res.status(200).json(data);
    console.log(data, 'datasss');
    console.log('dfsdfsf');
  } catch (error) {
    res.status(404).json(error, 'error');
  }
};
module.exports = {
  ClientListViewController,
  postClientListViewController,
  clientSpecificEvents,
  preWeddingShoot,
  managerList,
};
