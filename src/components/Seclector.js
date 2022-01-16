import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selector({setppp}) {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
    setppp(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div style ={{color:"#ECEBF3"}}>
      <FormControl   variant="standard" sx={{ m: 1, minWidth: 100  ,color:"red"}}>
        <InputLabel style ={{color:"#ECEBF3"}} id="demo-simple-select-standard-label">Posts</InputLabel>
        <Select style ={{color:"#ECEBF3"}}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Posts"
        >
          
          <MenuItem  value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  );
}
