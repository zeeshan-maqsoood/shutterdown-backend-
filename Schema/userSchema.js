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
});
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
