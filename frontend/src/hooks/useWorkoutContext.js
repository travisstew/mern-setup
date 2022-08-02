import {WorkoutsContext} from '../context/WorkoutContext';
import { useContext } from 'react';

export const useWorkoutsContext = ()=>{
  const context = useContext(WorkoutsContext)

  if(!context){
    throw Error('useworkoutcontext musst be used inside an workoutscontext provider');
  }

  return context;
}