const express = require('express');
const app = express();
const userRouter = require('./Routes/userRoutes');
const clientRouter = require('./Routes/AddClientRoutes');
const viewClientRouter = require('./Routes/ViewClientRoutes');
const previewClientRouter = require('./Routes/MyProfileRoutes');
const MyProfileRouter = require('./Routes/userRoutes');
const GetCalenderListRoutes = require('./Routes/GetCalenderListRoutes');
const ClientListViewRouter = require('./Routes/ClientListVIewRoutes');
const ShooterRouter = require('./Routes/ShooterRoutes');
// const ListViewSave = require('./Routes/ListViewSaveRoutes');
const checkListRouter = require('./Routes/CheckListRoutes');
const ClientViewRouter = require('./Routes/CalenderViewRoutes');
const DeliverableRouter = require('./Routes/DeliverableRoutes');
const DailyTaskRouter = require('./Routes/DailyTaskRoutes');
const AttendenceRouter = require('./Routes/AttendenceRoutes');
const ShooterEditorRouter = require('./Routes/EditorShooterRoutes');
const Database = require('./DataBase/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userSchema = require('./Schema/userSchema');
const ClientSchema = require('./Schema/AddCalenderViewSchema');
const CalenderRouter = require('./Routes/AddCalenderViewRoutes');
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;
// const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', userRouter);
app.use('/MyProfile', clientRouter);
app.use('/', previewClientRouter);
app.use('/', viewClientRouter);
app.use('/', MyProfileRouter);
app.use('/', ClientListViewRouter);
app.use('/', ClientViewRouter);
app.use('/', GetCalenderListRoutes);
app.use('/', CalenderRouter);
// app.use("/",ListViewSave)
app.use('/', DeliverableRouter);
app.use('/', DailyTaskRouter);
app.use('/', ShooterRouter);
app.use('/', checkListRouter);
app.use('/', AttendenceRouter);
app.use('/', ShooterEditorRouter);
// app.get('/', (req, res) => {
//   res.send('Hello world');
// });
// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./client/build/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });

app.listen(PORT, () => {
  try {
    console.log(`Server is running at port 5000`);
  } catch (error) {
    console.log('Server Error');
  }
});
