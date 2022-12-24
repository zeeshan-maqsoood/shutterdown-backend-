const mongoose = require('mongoose');
const DB = 'mongodb+srv://shutterdown:shutterdown@cluster0.nxvrn7f.mongodb.net/test';

mongoose
  .connect(DB, {
    useNewURlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DataBase Connected');
  })
  .catch((error) => {
    console.log('DataBase not Connected',error);
  });
