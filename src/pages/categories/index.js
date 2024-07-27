import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Grid, InputAdornment, MenuItem, TextField, IconButton, TablePagination, Tab } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon, Download as DownloadIcon, Delete as DeleteIcon, Edit as EditIcon, Visibility as ViewIcon } from '@mui/icons-material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import 'react-datepicker/dist/react-datepicker.css';
import TableIncome from 'src/views/dashboard/TableIncome';

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
  const [activeTab, setActiveTab] = useState('income');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', description: '', search: '' });
  const [image, setImage] = useState(null);
  const [data, setData] = useState([{
      no:"1",
      createdDate:'09/27/2023',
      category:'Salary',
      amount: '$1500.00',
      description:'Monthly Salary',
      payment:'Cash',
      ref:'Photo',
      remark:"Transfer to",
      tag:"Work"
    },
  ]);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleTabChange = (event, newValue) => setActiveTab(newValue);
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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => setImage(null);

  const handleSearch = () => {
    // Implement search functionality here
  };

  const handleAddNew = () => {
    // Implement add new functionality here
  };

  const handleExport = () => {
    // Implement export functionality here
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when rows per page changes
  };

  const handleEdit = (item) => {
    // Populate form with item data for editing
    setFormValues(item);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    // Implement delete functionality here, such as:
    setData(prevData => prevData.filter(item => item.no !== id));
  };

  const incomeOptions = [
    { value: 'salary', label: 'Salary' },
    { value: 'freeland', label: 'Freeland' },
  ];

  const paymentOptions = [
    { value: 'aba', label: 'ABA Bank' },
    { value: 'amk', label: 'AMK Bank' },
  ];

  const handleDownloadImage = () => {
    if (image) {
      const link = document.createElement('a');
      link.href = image;
      link.download = 'uploaded-image.png';
      link.click();
    }
  };

  const handleViewImage = () => {
    if (image) {
      const newWindow = window.open();
      newWindow.document.write(`<img src="${image}" alt="Uploaded Image" style="max-width: 100%;"/>`);
      newWindow.document.title = "View Image";
    }
  };

  return (
    <>
      <DialogTitle sx={{ fontWeight: 700, marginLeft: "-1rem", marginTop: "-2rem" }}>All Income</DialogTitle>
      <Card>
        <Grid container spacing={2} alignItems='center' padding="1rem 1.5rem">
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
          <Grid item xs={12} sm={2}>
            <Button
              variant='contained'
              color='secondary'
              startIcon={<DownloadIcon />}
              onClick={handleExport}
              fullWidth
            >
              Export
            </Button>
          </Grid>
        </Grid>

        <TabContext value={activeTab}>
          <TabList
            onChange={handleTabChange}
            aria-label='account-settings tabs'
            sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
          >
            <StyledTab value='income' label={<Box sx={{ display: 'flex', alignItems: 'center' }}><TabName>Income</TabName></Box>} />
            <StyledTab value='expense' label={<Box sx={{ display: 'flex', alignItems: 'center' }}><TabName>Expense</TabName></Box>} />
          </TabList>
          <TabPanel sx={{ p: 0 }} value='income'>
            <TableIncome
              data={data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              component="div"
              count={data.length} // Use data.length for the total number of rows
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='expense'>
            <TableIncome
              data={data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              component="div"
              count={data.length} // Use data.length for the total number of rows
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </TabPanel>
        </TabContext>
      </Card>

      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth='sm' fullWidth>
        <DialogTitle sx={{ textAlign: 'center', fontWeight: 700 }}>Create Income</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            name='name'
            label='Amount'
            type='number'
            fullWidth
            variant='outlined'
            value={formValues.name}
            onChange={handleInputChange}
          />
          <TextField
            id="income-category"
            select
            label="Category Income"
            defaultValue="salary"
            fullWidth
            sx={{ mt: 5 }}
          >
            {incomeOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            margin='dense'
            name='date'
            label='Date'
            type='date'
            fullWidth
            variant='outlined'
            value={formValues.date}
            onChange={handleInputChange}
            sx={{ mt: 5 }}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            id="payment"
            select
            label="Payment"
            defaultValue="aba"
            fullWidth
            sx={{ mt: 5 }}
          >
            {paymentOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

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
          />

          <TextField
            margin='dense'
            name='remark'
            label='Remark'
            type='text'
            fullWidth
            variant='outlined'
            value={formValues.remark}
            onChange={handleInputChange}
            sx={{ mt: 5 }}
          />

          <TextField
            margin='dense'
            name='reference'
            label='Reference'
            type='text'
            fullWidth
            variant='outlined'
            value={formValues.reference}
            onChange={handleInputChange}
            sx={{ mt: 5 }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '2px dashed #ccc',
              borderRadius: '4px',
              padding: '16px',
              marginTop: '16px',
              position: 'relative',
              textAlign: 'center',
            }}
          >
            {image ? (
              <>
                <img src={image} alt='Uploaded' style={{ maxWidth: '100%', maxHeight: '200px' }} />
                <Box sx={{ display: 'flex', gap: 2, mt: 2, position: 'absolute', bottom: '85px' }}>
                  <IconButton onClick={handleRemoveImage} color='primary'>
                    <DeleteIcon sx={{ color: 'white' }} />
                  </IconButton>
                  <IconButton onClick={handleDownloadImage} color='primary'>
                    <DownloadIcon sx={{ color: 'white' }} />
                  </IconButton>
                  <IconButton onClick={handleViewImage} color='primary'>
                    <ViewIcon sx={{ color: 'white' }} />
                  </IconButton>
                </Box>
              </>
            ) : (
              <>
                <input
                  type='file'
                  accept='image/*'
                  style={{ display: 'none' }}
                  id='upload-button'
                  onChange={handleImageUpload}
                />
                <label htmlFor='upload-button' style={{ cursor: 'pointer' }}>
                  <Box component='span' sx={{ display: 'inline-block', fontSize: '24px' }}>
                    &#8686;
                  </Box>
                  <Box component='span' sx={{ display: 'block', fontSize: '16px' }}>
                    Upload File
                  </Box>
                </label>
              </>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} variant='outlined' color='secondary'>Cancel</Button>
          <Button onClick={handleSubmit} size='md' variant='contained' color='primary'>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AccountSettings;
