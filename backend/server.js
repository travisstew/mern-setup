const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

//express app
const app = express();
const workoutRoutes = require('./routes/workouts');


//middleware

app.use(express.json());


app.use((req,res,next)=>{
  console.log(req.path, req.method);
  next();
});


//routes
app.use('/api/workouts',workoutRoutes);

//connect to db
mongoose.connect(process.env.MONG_URI).then(()=>{
  
      console.log('succesfull');
      //listen for request
      app.listen(process.env.PORT, ()=>{
      console.log("litening ");
}) 
}).catch((e)=>{
  console.log(e);
})

