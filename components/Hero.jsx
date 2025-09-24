import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <Paper elevation={3} sx={{ p:3, borderRadius:3, background: 'linear-gradient(90deg, rgba(15,107,82,1) 0%, rgba(10,60,50,1) 100%)', color:'#fff' }}>
      <Box sx={{ display:'flex', gap:3, alignItems:'center', flexDirection:{ xs:'column', md:'row' } }}>
        <motion.div initial={{ x:-40, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }}>
          <Typography variant="h4" sx={{ fontWeight:700 }}>We bring the store to your door</Typography>
          <Typography sx={{ mt:2, maxWidth:480 }}>Get organic produce and essentials delivered fast. Free delivery over $50.</Typography>
          <Button variant="contained" sx={{ mt:2, backgroundColor:'#fff', color:'primary.main' }}>Shop now</Button>
        </motion.div>
        <motion.div initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.6 }} style={{ flex:1 }}>
          <img src="https://via.placeholder.com/420x220?text=Hero+Image" alt="hero" style={{ width:'100%', borderRadius:12 }} />
        </motion.div>
      </Box>
    </Paper>
  );
}
