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

const rows = [
  {
    age: 27,
    status: 'current',
    date: '09/27/2018',
    name: 'Sally Quinn',
    salary: '$19586.23',
    email: 'eebsworth2m@sbwire.com',
    designation: 'Human Resources Assistant'
  },
  {
    age: 61,
    date: '09/23/2016',
    salary: '$23896.35',
    status: 'professional',
    name: 'Margaret Bowers',
    email: 'kocrevy0@thetimes.co.uk',
    designation: 'Nuclear Power Engineer'
  },
  {
    age: 59,
    date: '10/15/2017',
    name: 'Minnie Roy',
    status: 'rejected',
    salary: '$18991.67',
    email: 'ediehn6@163.com',
    designation: 'Environmental Specialist'
  },
  {
    age: 30,
    date: '06/12/2018',
    status: 'resigned',
    salary: '$19252.12',
    name: 'Ralph Leonard',
    email: 'dfalloona@ifeng.com',
    designation: 'Sales Representative'
  },
  {
    age: 66,
    status: 'applied',
    date: '03/24/2018',
    salary: '$13076.28',
    name: 'Annie Martin',
    designation: 'Operator',
    email: 'sganderton2@tuttocitta.it'
  },
  {
    age: 33,
    date: '08/25/2017',
    salary: '$10909.52',
    name: 'Adeline Day',
    status: 'professional',
    email: 'hnisius4@gnu.org',
    designation: 'Senior Cost Accountant'
  },
  {
    age: 61,
    status: 'current',
    date: '06/01/2017',
    salary: '$17803.80',
    name: 'Lora Jackson',
    designation: 'Geologist',
    email: 'ghoneywood5@narod.ru'
  },
  {
    age: 22,
    date: '12/03/2017',
    salary: '$12336.17',
    name: 'Rodney Sharp',
    status: 'professional',
    designation: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp'
  }
]

const reportData = [
  {
    days:"Today",
    priceIncome: 400,
    priceExpense:300,
    priceBalance: 100,
    currency: "$",
    date: "2024-02-15",
    activity: "Activity"
  },
  {
    days:"This weekly",
    priceIncome: 5400,
    priceExpense:1300,
    priceBalance: 100,
    currency: "$",
    date: "2024-02-15",
    activity: "Activity"
  },
  {
    days:"This Monthly",
    priceIncome: 11400,
    priceExpense: 10000,
    priceBalance: 100,
    currency: "$",
    date: "2024-02-15",
    activity: "Activity"
  },
  {
    days:"This Yearly",
    priceIncome: 22400,
    priceExpense:11300,
    priceBalance: 100,
    currency: "$",
    date: "2024-02-15",
    activity: "Activity"
  }
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Income</TableCell>
              <TableCell>Expense</TableCell>
              <TableCell>Balance</TableCell>
              {/* <TableCell>Salary</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Status</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {reportData.map(rep => (
              <TableRow hover key={rep.days} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='caption'>{rep.days}</Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem !important' }}>{rep.priceIncome}{rep.currency}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='caption'>{rep.date}</Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem !important' }}>{rep.priceExpense}{rep.currency}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='caption'>{rep.activity}</Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem !important' }}>{rep.priceBalance}{rep.currency}</Typography>
                  </Box>
                </TableCell>
                {/* <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 600 }
                    }}
                  />
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
