import React from 'react'

import DenseAppBar from './DenseAppBar'
import Button from '@mui/material/Button';
function Confirm({state,nextStep,prevStep,handleChange}) {
   

   
    return (
      
       <div >
         <DenseAppBar title="Confirm Your Details  "/>
         <div className="flexy">
         
             <li>FirstName : {state.firstName}
             </li>
             <li>LastName : {state.lastName}
             </li>
             <li>Email : {state.email}
             </li>
             <li>Bio : {state.bio}
             </li>
             <li>City : {state.city}
             </li>
             <li>Occupation : {state.occupation}
             </li>
         
         
         <Button variant="contained" color="primary" onClick={nextStep}>
           Confirm 
         </Button>
         <Button variant="contained" color="primary" onClick={prevStep}>
           Back
         </Button>
         </div>
        </div>
       
    )
}

export default Confirm


