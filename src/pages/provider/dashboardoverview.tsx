import { Typography, Box, Grid, Button, Paper } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';
import { Provider } from "../../types"
import SideBar from './components/sidebar';

const DashboardOverview = () => {
  const ratingData = [
    { stars: '5 ★', count: 120, fill: '#ffb400' },
    { stars: '4 ★', count: 80, fill: '#ffb400' },
    { stars: '3 ★', count: 30, fill: '#ffb400' },
    { stars: '2 ★', count: 10, fill: '#ffb400' },
    { stars: '1 ★', count: 5, fill: '#ffb400' },
  ];

  const completionData = [
    { name: 'Completed', value: 85, fill: '#4caf50' },
    { name: 'Cancelled', value: 15, fill: '#f44336' },
  ];

  const provider:Provider= JSON.parse(localStorage.getItem("profile")!)

  return (
    <Box sx={{display:'flex'}} component="main">
      <SideBar/>
      <Box component="div" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Typography textAlign={"center"} variant='h4' sx={{ mb: 4, fontWeight: 'bold' }}>
          Hello, {provider.firstname} {provider.lastname}
        </Typography>

        <Grid container spacing={3}>
          {/* Total Earnings */}
          <Grid  size={{xs:12, sm:6, md:3}}>
            <Paper sx={{ p: 2, height: 180, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant='h6' color="textSecondary">Total Earnings</Typography>
              <Typography variant='h4' sx={{ fontWeight: 'bold' }}>2000 €</Typography>
            </Paper>
          </Grid>

          {/* Pending Requests */}
          <Grid size={{xs:12, sm:6, md:3}}>
            <Paper sx={{ p: 2, height: 180, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant='h6' color="textSecondary">Pending Requests</Typography>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>10</Typography>
              </Box>
              <Button variant='contained' size='small' disableElevation>More details</Button>
            </Paper>
          </Grid>

          {/* Average Rating - BarChart */}
          <Grid size={{xs:12, sm:6, md:3}}>
            <Paper sx={{ p: 2, height: 180 }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 'bold', mb: 1 }}>Average Rating</Typography>
              <Box sx={{ height: 120 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={ratingData} margin={{ left: -30, right: 10 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="stars" type="category" tick={{ fontSize: 12 }} width={40} />
                    <Tooltip cursor={{ fill: 'transparent' }} />
                    <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={12} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>

          {/* Completion Rate - PieChart */}
          <Grid size={{xs:12, sm:6, md:3}}>
            <Paper sx={{ p: 2, height: 180, position: 'relative' }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Completion Rate</Typography>
              <Box sx={{ width: '100%', height: 140, position: 'relative' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={completionData}
                      innerRadius={45}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    />
                  </PieChart>
                </ResponsiveContainer>
                
                {/* Centered Text */}
                <Box sx={{
                  position: 'absolute',
                  top: '55%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4caf50', lineHeight: 1 }}>85%</Typography>
                  <Typography variant="caption" sx={{ fontSize: '0.6rem' }}>Success</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default DashboardOverview