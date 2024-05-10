import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function DropDown({label}) {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl>
        <InputLabel id="dropdown">Role</InputLabel>
        <Select
        value={age}
        labelId="dropdown"
        label={label}
        sx={{
          '& .MuiSelect-select': {
            height: '100%'
          },
          '& .MuiFormControl-root': {
            borderRadius: '10px',
          }
        }}
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