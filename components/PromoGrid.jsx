import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
export default function PromoGrid(){
  const promos = [
    { title:'Save $29', desc:'Special on select items', color:'#f8c6c6' },
    { title:'Discount 30%', desc:'On home essentials', color:'#f8e6c6' },
    { title:'Up to 50%', desc:'Clearance items', color:'#c6e7f8' },
    { title:'Free SHIP', desc:'Orders over $50', color:'#e9c6f8' }
  ];
  return (
    <Box sx={{ display:'grid', gap:2 }}>
      {promos.map((p,i)=>(
        <Paper key={i} sx={{ p:2, background:p.color }}>
          <Typography variant="subtitle1">{p.title}</Typography>
          <Typography variant="body2" sx={{ mb:1 }}>{p.desc}</Typography>
          <Button size="small" variant="contained">Shop</Button>
        </Paper>
      ))}
      <Paper sx={{ p:2 }}>
        <Typography variant="h6">Weekly best selling items</Typography>
      </Paper>
    </Box>
  );
}
