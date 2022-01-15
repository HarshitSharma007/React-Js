import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import DenseAppBar from './DenseAppBar'
import Button from '@mui/material/Button';
function PersonalDetails({state,nextStep,prevStep,handleChange}) {
  const Valid=()=>{
    if(state.bio===''||state.occupation===''||state.city===''){
      
      return 0;
    }
    return 1;
 }
  const next=()=>{
    if(Valid())
   nextStep();
   else {
     alert('please fill correct values')
   }
  }
  

   
    return (
      
       <div >
         <DenseAppBar title="Enter Your Personal Details "/>
         <div className="flexy">
         
         
         <TextField
         fullWidth 
         label="Occupation"
         placeholder="Enter your occupation"
         onChange={handleChange('occupation')}
         defaultValue={state.occupation}
         />
         
         
         <TextField
         fullWidth 
         label="Bio"
         placeholder="Enter your bio"
         onChange={handleChange('bio')}
         defaultValue={state.bio}
         />
         
         
         <TextField
         fullWidth 
         label="City"
         placeholder="Enter your city"
         onChange={handleChange('city')}
         defaultValue={state.city}
         />
         <Button variant="contained" color="primary" onClick={next}>
           Continue
         </Button>
         <Button variant="contained" color="primary" onClick={prevStep}>
           Back
         </Button>
         </div>
        </div>
       
    )
}

export default PersonalDetails


