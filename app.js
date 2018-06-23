const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const passport = require('passport'); 
const mongoose = require('mongoose'); 

const app = express();
const users = require('./routes/users');

//Port number
const port = 3000;

//CORS middleware
app.use(cors());

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