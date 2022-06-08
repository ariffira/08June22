const express = require('express'); //normal way
const cors = require('cors');
const axios = require("axios");
//import express from "express"; //ES6
const app = express();
//const PORT = process.env.PORT || 5000;
const PORT = 5000;
app.use(cors());

// API Routes 
app.get("/api/test", (req, res)=>{
   res.json('I am from Server') 
})

// get all users
app.get("/api/userAll", (req, res)=>{
    // Data from REST API
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(users => res.json(users.data))
})

app.listen(PORT, (req, res)=> {
    console.log('Start...Server is running successfully on port ' + PORT)
});
