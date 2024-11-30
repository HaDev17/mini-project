'use client';
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/dashboard/components/container/PageContainer';
// components
import TrafficDistribution from '@/app/dashboard/components/dashboard/TrafficDistribution';
import TopPayingClients from '@/app/dashboard/components/dashboard/TopPayingClients';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TrafficDistribution />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={8}>
            <TopPayingClients />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
