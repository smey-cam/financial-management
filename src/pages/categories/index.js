// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

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
import { Button } from '@mui/material'

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
  const [value, setValue] = useState('income')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='income'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* <AccountOutline /> */}
                <TabName>Income</TabName>
              </Box>
            }
          />
          <Tab
            value='expense'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* <LockOpenOutline /> */}
                <TabName>Expense9</TabName>
              </Box>
            }
          />
          {/* <Tab
            value='info'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InformationOutline />
                <TabName>Info</TabName>
              </Box>
            }
          /> */}
        </TabList>
        <div className='' style={{ marginRight: "1.5rem", marginTop: "-2.5rem", float: "right" }}>
            <Button size='small' variant='contained'>
              Add New
            </Button>
          </div>
        <TabPanel sx={{ p: 0 }} value='income'>
          <TableIncome />
          {/* <TabAccount /> */}
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='expense'>
        <TableIncome />
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