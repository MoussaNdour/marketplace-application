import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getServicesByProvider } from '../../services/api'
import { getEmail } from '../../services/auth'
import { Service } from '../../types'
import ServiceCard from '../../components/ServiceCard'
import SideBar from './components/sidebar'

const ServicesCatalogPage = () => {
  const [services, setServices] = useState<Array<Service>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const email: String | null = getEmail();
        if (email) {
          const result = await getServicesByProvider(email);
          
          setServices(result);
        }
      } catch (error) {
        console.error("Error occured in the process of services retrieving:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <Box sx={{display:'flex'}} component="main">
      <SideBar/>
      <Box component="div" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Typography variant='h6' sx={{ mb: 2 }}>Services Catalog</Typography>
    
        <Grid container sx={{justifyContent:'center'}} spacing={2}>
          {Array.isArray(services) && services.length > 0 ? (
            services.map((service) => (
              <Grid key={service.id} size={6}>
                <ServiceCard service={service} />
              </Grid>
            ))
          ) : (
            !loading && <Typography>No service provided yet</Typography>
          )}
      </Grid>
      </Box>
    </Box>
    
  );
}

export default ServicesCatalogPage;