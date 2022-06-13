const express = require('express'); 
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config()
// routes
const movieRouter = require('./routes/movie.js')
const seriesRouter = require('./routes/series.js')

app.use(cors());
app.use('/movie', movieRouter);
app.use('/series', seriesRouter);

app.listen(PORT, (req, res)=> {
    console.log('Start...Server is running successfully on port ' + PORT)
});
