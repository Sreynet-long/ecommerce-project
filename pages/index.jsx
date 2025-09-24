import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Container, Grid, Pagination, Box } from '@mui/material';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import PromoGrid from '../components/PromoGrid';

const fetcher = (url) => fetch(url).then(r => r.json());

export default function Home({ themeMode, toggleTheme }) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const limit = 6;
  const { data, mutate } = useSWR(() => `/api/products?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`, fetcher);
  const products = data?.items || [];
  const total = data?.total || 0;

  const [cart, setCart] = useState([]);
  useEffect(() => { try { setCart(JSON.parse(localStorage.getItem('cart')||'[]')) } catch(e){ setCart([]) } }, []);
  useEffect(() => { localStorage.setItem('cart', JSON.stringify(cart)) }, [cart]);

  function handleAdd(p) {
    setCart(prev => {
      const ex = prev.find(x=>x._id===p._id);
      if (ex) return prev.map(x=>x._id===p._id?{...x,qty:x.qty+1}:x);
      return [...prev, {...p, qty:1}];
    });
  }

  return (
    <div>
      <Header cartCount={cart.reduce((s,i)=>s+i.qty,0)} onToggleTheme={toggleTheme} onSearch={(q)=>{ setQuery(q); setPage(1); mutate(); }} />
      <Container sx={{ my:4 }}>
        <Hero />
        <Box sx={{ my:3 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {products.map(p=>(
                <Grid item xs={12} sm={6} key={p._id}>
                  <ProductCard product={p} onAdd={handleAdd} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display:'flex', justifyContent:'center', mt:4 }}>
              <Pagination count={Math.max(1, Math.ceil(total/limit))} page={page} onChange={(e,v)=>setPage(v)} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <PromoGrid />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
