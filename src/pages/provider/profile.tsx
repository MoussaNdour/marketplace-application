

import { Box, Typography } from '@mui/material'
import React from 'react'
import SideBar from './components/sidebar'

const ProviderProfile = () => {
  return (
    <Box sx={{display:'flex'}} component="main">
        <SideBar/>
        <Box component="div" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Typography variant='h4' sx={{textAlign:'center'}}>Your Profile</Typography>
    
    
        
        </Box>
    </Box>
  )
}

export default ProviderProfile
