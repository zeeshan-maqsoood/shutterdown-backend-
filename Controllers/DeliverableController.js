const AddClientSchema = require('../Schema/AddClientSchema');
const userSchema = require('../Schema/userSchema');
const ClientModel = require('../Schema/AddCalenderViewSchema');
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
  console.log(req.body,"body")

};
module.exports = {
  getCinematographerData,
  getEditorRule,
  getShooterDetailRule,
  getPhotosDataa,
  albumsData,
  DeliverableDataPost,
};
