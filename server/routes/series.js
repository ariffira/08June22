const express = require('express')
const router = express.Router()

// Routes for TV series
router.get("/title", (req, res)=>{
    res.send('OK') 
})
router.get("/id", (req, res)=>{
     res.send('OK') 
})

module.exports = router;