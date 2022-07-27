import React from 'react';
import { useEffect,useState } from 'react';



function Home() {
  const [workouts, setWorkouts] = useState(null)

  useEffect(()=>{
      const fetchWorkouts = async ()=>{
          const response = await fetch('http://localhost:4000/api/workouts');
          const json =  await response.json();
          if(response.ok){
              setWorkouts(json)
          }
      }

      fetchWorkouts()
  },[])

  return (
    <div className='home'>
      <h1>home</h1>
    </div>
  )
}

export default Home