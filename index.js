const express = require('express');
const app = express();
const userRouter = require('./Routes/userRoutes');
const clientRouter=require("./Routes/AddClientRoutes")
const viewClientRouter=require("./Routes/ViewClientRoutes")
const previewClientRouter=require("./Routes/MyProfileRoutes")
const MyProfileRouter=require("./Routes/userRoutes")
const ClientListViewRouter=require('./Routes/ClientListVIewRoutes')
const Database = require('./DataBase/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userSchema = require('./Schema/userSchema');

dotenv.config({ path: './config.env' });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', userRouter);
app.use('/MyProfile', clientRouter);
app.use("/",previewClientRouter)
app.use("/",viewClientRouter)
app.use("/", MyProfileRouter)
app.use("/",ClientListViewRouter)
// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

app.listen(5000, () => {
  try {
    console.log(`Server is running at port 5000`);
  } catch (error) {
    console.log('Server Error');
  }
});
