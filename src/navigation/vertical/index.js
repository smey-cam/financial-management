// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { MonetizationOn } from '@mui/icons-material'
import CurrencyExchange from '@mui/icons-material/CurrencyExchange';
import Assessment from '@mui/icons-material/Assessment';
import AccountBalance from '@mui/icons-material/AccountBalance';
import Category from '@mui/icons-material/Category';
import PriceChange from '@mui/icons-material/PriceChange';
import Payment from '@mui/icons-material/Payment';
import Dashboard from '@mui/icons-material/Dashboard';
import { AccountCog } from 'mdi-material-ui'


const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: Dashboard,
      path: '/'
    },
    {
      title: 'Category',
      icon: MonetizationOn,
      // path: '#!',
      path: '/categories'
    },
    // {
    //   title: 'Expense',
    //   icon: CurrencyExchange,
    //   path: '#!',
    //   // path: '/pages/login',
    //   // openInNewTab: true
    // },
    {
      title: 'All Reports',
      icon: Assessment,
      path: '/allReports',
      // path: '/pages/register',
      // openInNewTab: true
    },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    {
      sectionTitle: 'Setting'
    },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Accounts',
    //   path: '#!',
    //   // path: '/icons',
    //   icon: AccountCog
    // },
    {
      title: 'Management Categories',
      icon: Category,
      path: '/managementCategory'
      // path: '/cards'
    },
    {
      title: 'Currency',
      icon: PriceChange,
      path: '#!'
      // path: '/tables'
    },
    {
      title: 'Payment Method',
      icon: Payment,
      path: '#!'
      // path: '/tables'
    },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
