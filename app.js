const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('dotenv').config();


//import routes
const userRoutes = require('./routes/user');


//App
const app = express();


mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>console.log("DATABASE Connected"));


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser())


//route middelware
app.use('/api',userRoutes);


const port =process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});