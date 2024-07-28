import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import CardContent from '@mui/material/CardContent';

const allReportData = [
  {
    no: 1,
    createdDate: '09/27/2023',
    category: 'Salary',
    amount: '$1500.00',
    description: 'Monthly Salary',
    payment: 'Cash',
    balance:"$1500.00"
  },
];

const TableAllReport = () => {

  return (
    <Card>
      <CardContent>
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Payment</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allReportData.map((inc) => (
                <TableRow hover key={inc.no} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell>{inc.no}</TableCell>
                  <TableCell>{inc.createdDate}</TableCell>
                  <TableCell>{inc.category}</TableCell>
                  <TableCell>{inc.description}</TableCell>
                  <TableCell>{inc.payment}</TableCell>
                  <TableCell>{inc.amount}</TableCell>
                  <TableCell>{inc.balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default TableAllReport;
