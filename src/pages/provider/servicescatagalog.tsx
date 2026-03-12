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
        console.error("Erreur lors de la récupération des services:", error);
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
    
        <Grid container spacing={2}>
          
          {services.length > 0 ? (
            services.map((service) => (
              <Grid key={service.id} size={{ xs: 12, sm: 6, md: 3 }}>
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