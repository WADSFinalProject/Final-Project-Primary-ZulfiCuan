import { TextField } from '@mui/material'

// eslint-disable-next-line react/prop-types
function TextInput({label}) {
  return (
    <TextField 
        label={label}
        variant="outlined"
        sx={{
          '& .MuiInputBase-input': {
            height: '100%'
          },
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
          }
        }}
    ></TextField>
  )
}

export default TextInput