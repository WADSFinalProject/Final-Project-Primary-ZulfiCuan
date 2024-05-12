import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
function PasswordInputMobile({label}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <TextField 
      type={showPassword ? "text" : "password"}
      label={label}
      sx={{
        '& .MuiInputBase-input': {
          height: '100%'
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
        }
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    ></TextField>
  )
}

export default PasswordInputMobile
