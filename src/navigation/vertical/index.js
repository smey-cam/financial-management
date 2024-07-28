// ** Icon imports
import { MonetizationOn } from '@mui/icons-material'
import Assessment from '@mui/icons-material/Assessment';
import Category from '@mui/icons-material/Category';
import PriceChange from '@mui/icons-material/PriceChange';
import Payment from '@mui/icons-material/Payment';
import Dashboard from '@mui/icons-material/Dashboard';


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
    {
      title: 'All Reports',
      icon: Assessment,
      path: '/allReports',
    },
    {
      sectionTitle: 'Setting'
    },
    {
      title: 'Management Categories',
      icon: Category,
      path: '/managementCategory'
      // path: '/cards'
    },
    {
      title: 'Currency',
      icon: PriceChange,
      path: '/currency'
      // path: '/tables'
    },
    {
      title: 'Payment Method',
      icon: Payment,
      path: '/payment'
      // path: '/tables'
    },
  ]
}

export default navigation
