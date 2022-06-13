const express = require('express')
const router = express.Router()
const axios = require("axios");
const API_KEY = process.env.MY_API_KEY
// Routes for Movie
router.get("/title/:moviename", (req, res)=>{
    console.log(req.params.moviename)
    axios
    .get(`https://www.omdbapi.com/?t=${req.params.moviename}&apikey=${API_KEY}`)
    .then(response => {
        res.json(response.data)
    })
})
router.get("/id", (req, res)=>{
     res.send('OK') 
 })
module.exports = router;