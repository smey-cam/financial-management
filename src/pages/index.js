import Grid from '@mui/material/Grid'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import { Pie } from 'react-chartjs-2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const reportData = [
    {
      title: 'Total Income',
      price: '1000.5',
      currency: '$',
      icon: 'https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2020/01/income-picture_5e18f21d231a7.png'
    },
    {
      title: 'Total Expenses',
      price: '780.5',
      currency: '$',
      icon: 'https://cdn-icons-png.flaticon.com/512/4318/4318266.png'
    },
    {
      title: 'Total Balance',
      price: '220.0',
      currency: '$',
      icon: 'https://cdn-icons-png.flaticon.com/512/8634/8634075.png'
    },
  ]

  const data = {
    labels: ["Income", "Expense", "Balance"],

    datasets: [
      {
        data: [1000, 300, 700],
        backgroundColor: [
          "rgba(255, 94, 36, 1)",
          "rgba(6, 207, 231, 1)",
          "rgba(27, 40, 79, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {reportData.map((rep, ind) => (
          <Grid item xs={12} md={4} key={ind}>
            <Trophy title={rep.title} price={rep.price + rep.currency} icon={rep.icon} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Table />
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Grid item xs={4} style={{ margin: "auto" }}>
                <Pie data={data} />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
