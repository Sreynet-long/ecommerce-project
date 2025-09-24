import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Container, Grid, Typography, Button, CardMedia } from '@mui/material';
const fetcher = (url) => fetch(url).then(r=>r.json());
export default function ProductPage(){
  const router = useRouter(); const { id } = router.query;
  const { data: product } = useSWR(() => id ? `/api/products/${id}` : null, fetcher);
  useEffect(()=>{ window.scrollTo(0,0) }, [id]);
  if(!product) return <div style={{padding:40}}>Loading...</div>;
  const addToCart = ()=> {
    const cart = JSON.parse(localStorage.getItem('cart')||'[]');
    const ex = cart.find(x=>x._id===product._id);
    if(ex) ex.qty += 1; else cart.push({...product, qty:1});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart');
  };
  return (
    <Container sx={{ mt:4 }}>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <CardMedia component="img" image={product.images?.[0]} alt={product.title} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="h4">{product.title}</Typography>
          <Typography variant="h6" sx={{ mt:2 }}>${product.price.toFixed(2)}</Typography>
          <Typography sx={{ mt:2 }}>{product.description}</Typography>
          <Button variant="contained" sx={{ mt:3 }} onClick={addToCart}>Add to cart</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
