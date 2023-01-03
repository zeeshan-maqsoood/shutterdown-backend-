const AddClientSchema = require('../Schema/AddClientSchema');
const userSchema = require('../Schema/userSchema');
const ClientModel = require('../Schema/AddCalenderViewSchema');
const photoGrapherModel = require('../Schema/DeliverablesPhotographerSchema');
const DeliverableAlbumModel = require('../Schema/DeliverableAlbumSchema');
const getCinematographerData = async (req, res) => {
  console.log(req.params);
  try {
    const CinematoGrapherData = await AddClientSchema.find({
      userID: req.params.id,
    });
    const userData = await userSchema.find({ rollSelect: 'Editor' });
    console.log(userData, 'userSchema');
    res.status(200).json({ data1: CinematoGrapherData, data2: userData });
  } catch (error) {
    res.status(404).json(error);
  }
};
const getPhotosDataa = async (req, res) => {
  console.log(req.params);
  try {
    const CinematoGrapherData = await AddClientSchema.find({
      userID: req.params.id,
    });
    const userData = await userSchema.find({ rollSelect: 'Editor' });
    console.log(userData, 'userSchema');
    res.status(200).json({ data1: CinematoGrapherData, data2: userData });
  } catch (error) {
    res.status(404).json(error);
  }
};
const getEditorRule = async (req, res) => {
  console.log(req.params);
  try {
    const CinematoGrapherData = await userSchema.find({
      rollSelect: 'Editor',
    });
    console.log(CinematoGrapherData, 'cinematoGrapher');
    res.status(200).json(CinematoGrapherData);
  } catch (error) {
    res.status(404).json(error);
  }
};
const getShooterDetailRule = async (req, res) => {
  console.log(req.params);
  try {
    const CinematoGrapherData = await userSchema.findById({
      _id: req.params.id,
    });
    console.log(CinematoGrapherData, 'cinematoGrapher');
    res.status(200).json(CinematoGrapherData);
  } catch (error) {
    res.status(404).json(error);
    console.log(error, 'error');
  }
};
const albumsData = async (req, res) => {
  try {
    const CinematoGrapherData = await AddClientSchema.find({
      userID: req.params.id,
    });

    console.log(CinematoGrapherData, 'cinematoGrapherData');
    const userData = await userSchema.find({ rollSelect: 'Editor' });
    console.log(userData, 'userSchema');
    res.status(200).json({ data1: CinematoGrapherData, data2: userData });
  } catch (error) {
    res.status(404).json(error);
  }
};
const DeliverableDataPost = async (req, res) => {
  console.log(req.body, 'body');
  try {
    const DeliverableIdData = await ClientModel.findOne({
      eventsId: req.body.data.eventsId,
    });
    console.log(DeliverableIdData, 'DeliverableIdData');
    if (DeliverableIdData) {
      const DeliverableId = await ClientModel.findOneAndUpdate(
        { eventsId: req.body.data.userID },
        {
          userID: req.body.data.userID,
          eventsId: req.body.data.eventsId,
          client: req.body.data.client,
          Editor: req.body.data.Editor,
          WeddingDate: req.body.data.weddingDate,
          companyDate: req.body.data.CompanyDate,
          ClientDate: req.body.data.clientDate,
          Status: req.body.data.status,
          ClientRevision: req.body.data.clientRevision,
        }
      );
      console.log(DeliverableId, 'DeliverableId');
      //  await DeliverableUpdatedData.save();
      res.status(200).json('successfully assigned');
    } else {
      const postDeliverableData = await ClientModel({
        userID: req.body.data.userID,
        eventsId: req.body.data.eventsId,
        client: req.body.data.client,
        Editor: req.body.data.Editor,
        WeddingDate: req.body.data.weddingDate,
        companyDate: req.body.data.CompanyDate,
        ClientDate: req.body.data.clientDate,
        Status: req.body.data.status,
        ClientRevision: req.body.data.clientRevision,
      });
      await postDeliverableData.save();
    }
    console.log(DeliverableIdData, 'DeliverableDataId');

    console.log(DeliverableIdData, 'DeliverableData');
  } catch (error) {
    console.log(error, 'error');
  }
  // try {
  // const DeliverableData=await ClientModel.find()
  // if (DeliverableData.length < 1) {
  //  const DeliverableUpdatedData=await ClientModel({
  // cinematoGrapher:{
  // userID:req.body.data.userID,
  // eventsId:req.body.data.eventsId,
  // client:req.body.data.client,
  // Editor:req.body.data.Editor,
  // WeddingDate:req.body.data.weddingDate,
  // companyDate:req.body.data.CompanyDate,
  // ClientDate:req.body.data.clientDate,
  // Status:req.body.data.status,
  // ClientRevision:req.body.data.clientRevision
  // }
  //  })
  //  await DeliverableUpdatedData.save();
  //  res.status(200).json("successfully assigned")
  //  console.log(DeliverableData,"DeliverableData")
  // } else {
  // const DeliverableExistData = await photoGrapherModel.findOneAndUpdate(
  //   {
  //     eventsId: req.body.data.eventsId,
  //   },
  //   {
  //     cinematoGrapher: {
  //       userID: req.body.data.userID,
  //       eventsId: req.body.data.eventsId,
  //       Client: req.body.data.client,
  //       Editor: req.body.data.Editor,
  //       WeddingDate: req.body.data.weddingDate,
  //       companyDate: req.body.data.CompanyDate,
  //       ClientDate: req.body.data.clientDate,
  //       Status: req.body.data.status,
  //       ClientRevision: req.body.data.clientRevision,
  //     },
  //   }
  // );
  // res.status(200).json("Successfully updated")
  // }
  // } catch (error) {
  //   res.status(404).json("not added")
  // }
};
const PhotosDeliverableData = async (req, res) => {
  console.log(req.body, 'body');

  try {
    const PhotoDeliverableDataId = await photoGrapherModel.findOne({
      eventsId: req.body.data.eventsId,
    });
    console.log(PhotoDeliverableDataId, 'photoDeliverableId');
    if (PhotoDeliverableDataId) {
      const PhotoDeliverableData = await photoGrapherModel.findByIdAndUpdate(
        { eventsId: req.body.data.eventsId },
        {
          userID: req.body.data.userID,
          eventsId: req.body.data.eventsId,
          client: req.body.data.client,
          Editor: req.body.data.Editor,
          WeddingDate: req.body.data.weddingDate,
          companyDate: req.body.data.companyDate,
          clientDate: req.body.data.clientDate,
          Status: req.body.data.status,
          ClientRevision: req.body.data.clientRevison,
        }
      );
    } else {
      const PhotoDeliverableData = await photoGrapherModel({
        userID: req.body.data.userID,
        eventsId: req.body.data.eventsId,
        client: req.body.data.client,
        Editor: req.body.data.Editor,
        WeddingDate: req.body.data.weddingDate,
        companyDate: req.body.data.companyDate,
        clientDate: req.body.data.clientDate,
        Status: req.body.data.status,
        ClientRevision: req.body.data.clientRevison,
      });
      await PhotoDeliverableData.save();
    }
    // const photoDeliverableData = await photoGrapherModel({

    //     userID: req.body.data.userID,
    //     eventsId: req.body.data.eventsId,
    //     client: req.body.data.client,
    //     Editor: req.body.data.Editor,
    //     WeddingDate: req.body.data.weddingDate,
    //     companyDate: req.body.data.companyDate,
    //     clientDate: req.body.data.clientDate,
    //     Status: req.body.data.status,
    //     ClientRevision: req.body.data.clientRevison,

    // });
    // await photoDeliverableData.save();
    res.status(200).json('successfully assigned');
    console.log(photoDeliverableData, 'photoDeliverableData');
  } catch (error) {}
  //   try {
  //  const PhotosDeliverableData = await photoGrapherModel.find();
  //  console.log(PhotosDeliverableData,'photot')

  //  if (PhotosDeliverableData.length<1) {
  //  const photosUpdatedData = await photoGrapherModel({
  //    photoGrapher: {
  //      userID: req.body.data.userID,
  //      eventsId: req.body.data.eventsId,
  //      client: req.body.data.client,
  //      Editor: req.body.data.Editor,
  //      WeddingDate: req.body.data.weddingDate,
  //      companyDate: req.body.data.companyDate,
  //      clientDate: req.body.data.clientDate,
  //      Status: req.body.data.status,
  //      ClientRevision: req.body.data.clientRevison,
  //    },
  //  });
  //  console.log("first runs")
  //  await photosUpdatedData.save()
  //  }
  //  else {
  // const DeliverableExistData = await photoGrapherModel.findOneAndUpdate(
  //   {
  //     eventsId: req.body.data.eventsId,
  //   },
  //   {
  //     photoGrapher: {
  //       userID: req.body.data.userID,
  //       eventsId: req.body.data.eventsId,
  //       client: req.body.data.client,
  //       Editor: req.body.data.Editor,
  //       WeddingDate: req.body.data.weddingDate,
  //       companyDate: req.body.data.companyDate,
  //       clientDate: req.body.data.clientDate,
  //       Status: req.body.data.status,
  //       ClientRevision: req.body.data.clientRevison,
  //     },
  //   }
  // );
  // await DeliverableExistData.save()
  // console.log(DeliverableExistData,"DeliverableExistData")
  // console.log("Second Runs")
  //  }

  //   } catch (error) {

  //   }
};

const AlbumsPostData = async (req, res) => {
  console.log(req.body, 'body');
  try {
    const AlbumId = await DeliverableAlbumModel.findOne({
      eventsId: req.body.data.eventsId,
    });

    if (AlbumId) {
      console.log('first Run');
      const AlbumUpdateData = await DeliverableAlbumModel.findOneAndUpdate(
        { eventsId: req.body.data.eventsId },
        {
          userID: req.body.data.userID,
          eventsId: req.body.data.eventsId,
          // client: req.body.data.client,
          Editor: req.body.data.Editor,
          Status: req.body.data.status,
        }
      );
      await AlbumUpdateData.save();
    } else {
      console.log('second Run');
      const AlbumsPostDatas = await DeliverableAlbumModel({
        userID: req.body.data.userID,
        eventsId: req.body.data.eventsId,
        // client: req.body.data.client,
        Editor: req.body.data.Editor,
        Status: req.body.data.status,
      });
      await AlbumsPostDatas.save();
      console.log(AlbumsPostData, 'AlbumsPostData');
    }
  } catch (error) {}
};
const DeliverableData = async (req, res) => {
  console.log(req.params, 'params');
  try {
    const cinematoGrapherData = await AddClientSchema.findOne({
      userID: req.params.id,
    });
    const PhotoGrapherData = await photoGrapherModel.findOne({
      userID: req.params.id,
    });
    const albumsData = await DeliverableAlbumModel.findOne({
      userID: req.params.id,
    });
    res
      .status(200)
      .json({
        cinematoGrapherData: cinematoGrapherData,
        PhotoGrapherData: PhotoGrapherData,
        albumsData: albumsData,
      });
  } catch (error) {
    res.status(404).json(error);
  }
};
module.exports = {
  getCinematographerData,
  getEditorRule,
  getShooterDetailRule,
  getPhotosDataa,
  albumsData,
  DeliverableDataPost,
  PhotosDeliverableData,
  AlbumsPostData,
  DeliverableData,
};
