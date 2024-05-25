import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function DropDown({label}) {
  const styleForm = {
    '& .MuiInputBase-root': {
      // some cringe number work difference of 0.157 barely noticeable
      height: '78.5%'
    },
    '& .MuiOutlinedInput-root': {
      "&.Mui-focused fieldset": {
        borderColor: 'green'
      },
      borderRadius: '10px',
    },
    "& label.Mui-focused": {
      color: 'green'
    }
  }
  
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl sx={styleForm}>
        <InputLabel id="dropdown" >Role</InputLabel>
        <Select
        value={age}
        labelId="dropdown"
        label={label}
        onChange={handleChange}
        >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="1">Centra Employee</MenuItem>
            <MenuItem value="2">Centra Manager</MenuItem>
            <MenuItem value="3">XYZ Employee</MenuItem>
            <MenuItem value="4">XYZ Manager</MenuItem>
            <MenuItem value="5">Harbour</MenuItem>    
        </Select>
    </FormControl>
  )
}

export default DropDown