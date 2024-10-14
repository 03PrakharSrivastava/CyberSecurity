const express = require('express');
const app = express();
const port = 4000;

const mongoDB = require('./db.js');
mongoDB();

const cors = require("cors");

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

app.use('/api', require('./routes/CreateUser.js'));
app.use('/api', require('./routes/Auth.js'));

app.use('/api', require('./routes/Admin/CreateTeam.js'));
app.use('/api', require('./routes/Admin/AdminTeamList.js'));
app.use('/api', require('./routes/Admin/DeleteTeam.js'));
app.use('/api', require('./routes/Admin/ViewTeamStudent.js'));

app.use('/api',require('./routes/Student/JoinTeam.js'));
app.use('/api',require('./routes/Student/ViewTeam.js'));

app.use('/api', require('./routes/Profile.js'));

app.listen(port, ()=>{
    console.log(`listening at port ${port}`);
});