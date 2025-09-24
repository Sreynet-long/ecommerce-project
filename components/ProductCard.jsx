import React from 'react';
import Link from 'next/link';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function ProductCard({ product, onAdd }) {
  return (
    <motion.div initial={{ y:12, opacity:0 }} animate={{ y:0, opacity:1 }} whileHover={{ scale:1.02 }} transition={{ duration:0.35 }}>
      <Card sx={{ height:'100%', display:'flex', flexDirection:'column', borderRadius:3 }}>
        <Link href={`/product/${product._id}`} legacyBehavior>
          <a style={{ textDecoration:'none', color:'inherit' }}>
            <CardMedia component="img" height="180" image={product.images?.[0]} alt={product.title} />
            <CardContent>
              <Typography variant="subtitle1" noWrap>{product.title}</Typography>
              <Typography variant="body2" color="text.secondary" noWrap>{product.description}</Typography>
              <Typography sx={{ mt:1 }}>${product.price.toFixed(2)}</Typography>
            </CardContent>
          </a>
        </Link>
        <CardActions sx={{ mt:'auto' }}>
          <Button size="small" onClick={()=>onAdd(product)}>Add</Button>
          <Link href={`/product/${product._id}`} legacyBehavior><Button size="small">View</Button></Link>
        </CardActions>
      </Card>
    </motion.div>
  );
}
