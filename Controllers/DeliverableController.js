const AddClientSchema = require('../Schema/AddClientSchema');
const userSchema=require('../Schema/userSchema')
const getCinematographerData = async (req, res) => {
  console.log(req.params);
  try {
    const CinematoGrapherData = await AddClientSchema.find({
      userID: req.params.id,
    });
    res.status(200).json(CinematoGrapherData)
  } catch (error) {
    res.status(404).json(error)
  }
};
const getEditorRule = async (req, res) => {
  console.log(req.params);
  try {
    const CinematoGrapherData = await userSchema.find({
      rollSelect: "Editor",
    });
    console.log(CinematoGrapherData,"cinematoGrapher")
    // res.status(200).json(CinematoGrapherData)
  } catch (error) {
    res.status(404).json(error)
  }
};
module.exports = { getCinematographerData, getEditorRule };
