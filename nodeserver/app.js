const express = require('express');
var app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//middleware
app.use(bodyParser.json());

//import routes
const userRoute = require('./router/userroute');
app.use('/user', userRoute );



app.get('/',(req, res) =>{
  console.log('test sss');
   res.send('home test');
});

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true } , () =>
 console.log('connected to database test ')
 );



app.listen(3006);