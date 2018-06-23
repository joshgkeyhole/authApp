const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const passport = require('passport'); 
const mongoose = require('mongoose'); 
const config = require('./config/database');

//add database
mongoose.connect(config.database);

//test if connected to database
mongoose.connection.on('connected', () => {
    console.log('Connected to database: '+config.database)
});

//error if can't connect to db
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err)
});

const app = express();
const users = require('./routes/users');

//Port number
const port = 3000;

//CORS middleware
app.use(cors());

//Set static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

//Index Route 
app.get('/', (req,res) => {
    res.send('Invalid endpoint');
});

//Start server
app.listen(port, () => {
    console.log('Server started on port '+port);
});