const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  rollSelect: {
    type: String,
    required: true,
  },
  About:{
    type:String,
  },
  AboutMyJob:{
    type:String
  },
  interestAndHobbies:{
    type:String
  },
  primaryDetails:{
    firstName:{
      type:String
    }
  }
});
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
