const express = require('express'); //normal way
const cors = require('cors');
const axios = require("axios");
//import express from "express"; //ES6
const app = express();
//const PORT = process.env.PORT || 5000;
const PORT = 5000;
app.use(cors());

// API Routes 
// get all users
app.get("/api/userAll", (req, res)=>{
    // Data from REST API
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(users => res.json(users.data))
})

// get User by Id
app.get("/api/userById/:id", (req, res)=>{
    console.log(req.params.id)
    axios.get('https://jsonplaceholder.typicode.com/users/'+req.params.id)
    .then(user => {
        console.log(user.data)
        res.json({
            user: user.data,
            message: 'You successfully retrieve users data from Jsonplaceholder.com'
        })
    })
    .catch(error=> res.json(error))
})

app.listen(PORT, (req, res)=> {
    console.log('Start...Server is running successfully on port ' + PORT)
});
