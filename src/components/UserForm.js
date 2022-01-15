import React from 'react'
import { useState } from 'react'
import UserDetails from './UserDetails'
import PersonalDetails from './PersonalDetails'
import Success from './Success'
import Confirm from './Confirm'
function UserForm() {
    const[step,setStep]=useState(1)
    const [state,setState]=useState({firstName:'',lastName:'',email:'',bio:'',city:'',occupation:'' })
    const nextStep=()=>{
        setStep(step+1);
    }
    const prevStep=()=>{
        setStep(step-1);
    }
    const handleChange=input=>e=>{
       setState(state=>({...state,[input]:e.target.value}));
    }
   {
        switch(step){
         case 1:
            return (<UserDetails nextStep={nextStep}  handleChange={handleChange} state={state}/>)
         case 2:
             return (<PersonalDetails nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} state={state}/>)
         case 3:
             return (<Confirm nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} state={state}/>)
          case 4:
              return (<Success/>)
           default:
               return (<h1>hupppppp</h1>)
          
        }

    }
    
    
}

export default UserForm
