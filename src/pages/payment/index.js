import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Grid, InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon } from '@mui/icons-material';
import TablePayment from 'src/views/dashboard/TablePayment'

const AccountSettings = () => {
  const [value, setValue] = useState('income')
  const [formValues, setFormValues] = useState({ name: '', description: '', search: '' });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formValues);
    handleDialogClose();
  };

  const handleEdit = (item) => {
    setFormValues(item);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    // Implement delete functionality here, such as:
    // setData(prevData => prevData.filter(item => item.no !== id));
  };

  return (
    <>
      <DialogTitle sx={{ fontWeight: 700, marginLeft: "-1rem", marginTop: "-2rem" }}>All Payment Method</DialogTitle>
      <Card sx={{ minHeight: "40rem" }}>
        <Grid container spacing={12} alignItems='center' padding="1rem 1.5rem" justifyContent="space-between">
          <Grid item xs={12} sm={8}>
            <TextField
              margin='dense'
              name='search'
              label='Search'
              type='text'
              size="small"
              fullWidth
              variant='outlined'
              value={formValues.search}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant='contained'
              color='primary'
              startIcon={<AddIcon />}
              onClick={handleDialogOpen}
              fullWidth
            >
              Add new
            </Button>
          </Grid>
        </Grid>
        <TablePayment
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </Card>
      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth='sm' fullWidth>
        <DialogTitle sx={{ textAlign: 'center', fontWeight: 700, textTransform: 'capitalize' }}>Create Payment Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            name='name'
            label='Name'
            type='text'
            fullWidth
            variant='outlined'
            value={formValues.name}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            name='description'
            label='Description'
            type='text'
            fullWidth
            variant='outlined'
            value={formValues.description}
            onChange={handleInputChange}
            sx={{ mt: 5 }}
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} variant='outlined' color='secondary'>Cancel</Button>
          <Button onClick={handleSubmit} size='md' variant='contained' color='primary'>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AccountSettings
