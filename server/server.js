// imports
const express = require('express'); 
const cors = require('cors');
const app = express();
require('dotenv').config()
const PORT = 5000 || process.env.PORT;
const {body, validationResult} = require('express-validator')

// general settings and uses here
app.use(cors());
app.use(express.json())

// backend api routes import here
app.post('/auth/registration', 
body('fullname').not().isEmpty()
.withMessage('Full name should not be empty!'),
body('email')
.not().isEmpty()
.withMessage('Its empty.Please give an email')
.isEmail()
.withMessage('This is not Valid email. Please write an valid email with @ and .'),
body('pasword').not().isEmpty()
.withMessage('Password should not be empty!')
.isLength({min:4, max:10})
.withMessage('Password must be 4-10 characters')
.matches(/\d/)
.withMessage('Password must contain a number')
,(req, res)=>{
    const errors = validationResult(req)
    console.log(errors) 
    res.json(errors)   
})

app.listen(PORT, (req, res)=> {
    console.log('Start...Server is running successfully on port ' + PORT)
});
