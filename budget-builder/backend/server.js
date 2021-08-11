const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app  = express();


const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{  useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('Mongodb connection successful');
});

const port  = process.env.PORT || 8000

app.use(cors());
app.use(express.json());

//const expenditureRoute = require('./routes/expenditures');
const budgetRoute = require('./routes/budgets');

//app.use('/expenditures',expenditureRoute);
app.use('/budgets',budgetRoute);

app.listen(port, () =>{
    console.log('Server is running on port '+ port);
});

