import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import DenseAppBar from './DenseAppBar'
import Button from '@mui/material/Button';
function UserDetails({state,nextStep,handleChange}) {
  const Valid=()=>{
     if(state.firstName===''||state.lastName===''||state.email===''){
       
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
         <DenseAppBar title="Enter Your Details Here"/>
         <div className="flexy">
         <TextField
         fullWidth 
         label="FirstName"
         placeholder="Enter your first name"
         onChange={handleChange('firstName')}
         defaultValue={state.firstName}
         />
         
         
         <TextField
         fullWidth 
         label="LastName"
         placeholder="Enter your Last name"
         onChange={handleChange('lastName')}
         defaultValue={state.lastName}
         />
         
         
         <TextField
         fullWidth 
         label="Email"
         placeholder="Enter your Email"
         onChange={handleChange('email')}
         defaultValue={state.email}
         />
         
         
         
         
        
         <Button variant="contained" color="primary" onClick={next}>
           Continue
         </Button>
         
         </div>
        </div>
       
    )
}

export default UserDetails


