import { useState } from 'react'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import 'react-datepicker/dist/react-datepicker.css'
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Grid, InputAdornment, TextField, Tab } from '@mui/material';
import TableCategory from 'src/views/dashboard/TableCategory'
import { Search as SearchIcon, Add as AddIcon } from '@mui/icons-material';

const StyledTab = styled(Tab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67,
  },
}));

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

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

  return (
    <>
      <DialogTitle sx={{ fontWeight: 700, marginLeft: "-1rem", marginTop: "-2rem" }}>All Categories</DialogTitle>
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
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label='account-settings tabs'
            sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
          >
            <StyledTab
              value='income'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Income</TabName>
                </Box>
              }
            />
            <StyledTab
              value='expense'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Expense</TabName>
                </Box>
              }
            />
          </TabList>
          <TabPanel sx={{ p: 0 }} value='income'>
            <TableCategory
              handleEdit={handleEdit}
            />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='expense'>
            <TableCategory handleEdit={handleEdit} />
          </TabPanel>
        </TabContext>
      </Card>
      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth='sm' fullWidth>
        <DialogTitle sx={{ textAlign: 'center', fontWeight: 700, textTransform: 'capitalize' }}>Create {value} Category</DialogTitle>
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
