import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { Edit, Delete as DeleteIcon } from '@mui/icons-material';

const categoryData = [
  {
    no: 1,
    name: 'Salary',
    description: 'Monthly Salary',
  },
];

const TablePayment = (props) => {
  const { handleEdit, handleDelete } = props;

  return (
    <Card>
      <CardContent>
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categoryData.map((inc) => (
                <TableRow hover key={inc.no} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell>{inc.no}</TableCell>
                  <TableCell>{inc.name}</TableCell>
                  <TableCell>{inc.description}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton color='primary' >
                        <Edit sx={{ color: 'blue' }} onClick={() => handleEdit(inc.no)} />
                      </IconButton>
                      <IconButton color='primary' onClick={() => handleDelete(inc.no)}>
                        <DeleteIcon sx={{ color: 'red' }} />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default TablePayment;
