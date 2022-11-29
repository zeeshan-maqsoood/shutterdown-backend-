const mongoose = require('mongoose');
const DB = 'mongodb://localhost:27017/ShutterDown';

mongoose
  .connect(DB, {
    useNewURlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DataBase Connected');
  })
  .catch(() => {
    console.log('DataBase not Connected');
  });
