import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { Button, Card, DialogActions, DialogTitle, Grid, TextField, MenuItem, Box } from '@mui/material';

const AccountSettings = () => {
  const [formValues, setFormValues] = useState({ name: '', description: '', search: '' });

  const handleSubmit = () => {
    console.log(formValues);
  };

  const currencyOptions = [
    { value: 'riels', label: 'Riels' },
    { value: 'dollar', label: 'Dollar' },
  ];

  return (
    <>
      <Card sx={{
        width: '50%',
        height: "15rem",
        justifyContent: "center",
        justifyItems: "center",
        margin: "auto",
        marginTop: "12rem"
      }}>
        <Grid container spacing={12} alignItems='center' padding="1rem 1.5rem" justifyContent="space-between">
          <Grid item xs={12} sm={12}>
            <DialogTitle sx={{ fontWeight: 700, textAlign: 'center', marginTop: "-1.5rem" }}>Set up Currency</DialogTitle>
            <TextField
              id="income-category"
              select
              label="Currency"
              defaultValue="riels"
              fullWidth
              sx={{ mt: 5 }}
            >
              {currencyOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <DialogActions>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button
              sx={{ textAlign: 'center' }}
              onClick={handleSubmit}
              size='md'
              variant='contained'
              color='primary'
            >
              Submit
            </Button>
          </Box>
        </DialogActions>
      </Card>
    </>
  )
}

export default AccountSettings
