// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import CardContent from '@mui/material/CardContent'
import { mdiDeleteOutline } from '@mdi/js';
import { Icon } from '@mui/material'

const incomeData = [
  {
    no: 1,
    createdDate: '09/27/2023',
    category: 'Salary',
    amount: '$1500.00',
    description: 'Monthly Salary',
    payment: 'Cash',
    ref: 'Photo',
    remark: "Transfer to ....",
    tag:"Work"
  },
]

const TableIncome = () => {
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
              <TableCell>Amount</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Payment</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell>Remark</TableCell>
              <TableCell>Tag</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incomeData.map(inc => (
              <TableRow hover key={inc.days} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{inc.no}</TableCell>
                <TableCell>{inc.createdDate}</TableCell>
                <TableCell>{inc.category}</TableCell>
                <TableCell>{inc.amount}</TableCell>
                <TableCell>{inc.description}</TableCell>
                <TableCell>{inc.payment}</TableCell>
                <TableCell>{inc.ref}</TableCell>
                <TableCell>{inc.remark}</TableCell>
                <TableCell>{inc.tag}</TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </CardContent>
    </Card>
  )
}

export default TableIncome
