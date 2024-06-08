import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function CentraManagerDropDown({label}) {
    const [age, setAge] = useState('1');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
  return (
    <FormControl fullWidth sx={{backgroundColor: "white", '& .MuiOutlinedInput-root': {borderRadius: '10px',},}}>
        <InputLabel id="dropdownCM"></InputLabel>
        <Select
        value={age}
        labelId="dropdownCM"
        label={label}
        onChange={handleChange}
        >
            <MenuItem value="1">Usuable</MenuItem>
            <MenuItem value="2">Expired</MenuItem>    
        </Select>
    </FormControl>
  )
}

export default CentraManagerDropDown