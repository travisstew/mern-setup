const express = require('express');
const Workout = require('../models/workoutModel');



const router = express.Router();


router.get('/', (req,res)=>{
    res.json({mssg: "get all workouts"})
});

router.get('/:id', (req,res)=>{
   res.json({mssg: "get a single workout"})
});

router.post('/', async (req,res)=>{
      const {title,load,reps} = req.body;

      try{  
          const workout = await Workout.create({title,load,reps});
          return res.status(200).json(workout);
            
        }catch(error){
       return  res.status(400).json({error: error.message})
    
      
      }

    res.json({mssg: "post new workout"})
});

router.delete('/:id', (req,res)=>{
    res.json({mssg: "delete new workout"})
});

router.patch('/:id', (req,res)=>{
    res.json({mssg: "update new workout"})
});




module.exports = router;

