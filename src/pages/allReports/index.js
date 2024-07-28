// ** React Imports
import { useState } from 'react'

import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import { DialogTitle, Box, Card, TablePagination, Button } from '@mui/material';

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import TableIncome from 'src/views/dashboard/TableIncome'
import TableAllReport from 'src/views/dashboard/TableAllReport'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState('account')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <DialogTitle sx={{ fontWeight: 700, marginLeft: "-1rem", marginTop: "-2rem" }}>All Reports</DialogTitle>

      <Card sx={{ minHeight: "40rem" }}>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label='account-settings tabs'
            sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
          >
            <Tab
              value='account'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {/* <AccountOutline /> */}
                  <TabName>Income Reports</TabName>
                </Box>
              }
            />
            <Tab
              value='security'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {/* <LockOpenOutline /> */}
                  <TabName>Expense Reports</TabName>
                </Box>
              }
            />
            <Tab
              value='info'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {/* <InformationOutline /> */}
                  <TabName>Balance Reports</TabName>
                </Box>
              }
            />
          </TabList>
          <Box sx={{
            display: 'flex',
            margin: '1rem',
            justifyContent:"end"
          }} >
            <Button sx={{ marginRight: '8px' }} onClick={() => console.log("Daily")} variant='outlined' color='secondary'>Daily</Button>
            <Button sx={{ marginRight: '8px' }} onClick={() => console.log("Weekly")} variant='outlined' color='secondary'>Weekly</Button>
            <Button sx={{ marginRight: '8px' }} onClick={() => console.log("Monthly")} variant='outlined' color='secondary'>Monthly</Button>
            <Button sx={{ marginRight: '8px' }} onClick={() => console.log("Yearly")} variant='outlined' color='secondary'>Yearly</Button>
            <Button onClick={() => console.log("Export")} variant='outlined' color='secondary'>Export</Button>
          </Box>
          <TabPanel sx={{ p: 0 }} value='account'>
            <TableAllReport />
            {/* <TabAccount /> */}
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='security'>
            <TableAllReport />
          </TabPanel>
          {/* <TabPanel sx={{ p: 0 }} value='info'>
          <TabInfo />
        </TabPanel> */}
        </TabContext>
      </Card>
    </>
  )
}

export default AccountSettings
