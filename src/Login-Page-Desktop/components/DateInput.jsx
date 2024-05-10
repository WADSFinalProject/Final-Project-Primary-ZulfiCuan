import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function DateInput() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
        label={"Birth Date"}
        sx={{
          '& .MuiInputBase-input': {
            height: '100%'
          },
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
          }
        }}
      ></DatePicker>
    </LocalizationProvider>
  )
}

export default DateInput