const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user')

const app = express();

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>console.log("DATABASE Connected"));

//route middelware
app.use('/api',userRoutes);

const port =process.env.PORT || 1234;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});