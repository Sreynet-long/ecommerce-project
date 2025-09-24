import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, IconButton, Button, Divider, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  useEffect(()=>{ try{ setCart(JSON.parse(localStorage.getItem('cart')||'[]')) }catch(e){ setCart([]) } }, []);
  useEffect(()=>{ localStorage.setItem('cart', JSON.stringify(cart)) }, [cart]);
  const remove = (id) => setCart(prev=>prev.filter(p=>p._id!==id));
  const changeQty = (id, delta) => setCart(prev=>prev.map(p=>p._id===id?{...p, qty: Math.max(1, p.qty+delta)}:p));
  const total = cart.reduce((s,p)=>s + p.price * p.qty, 0);
  return (
    <Container sx={{ mt:4 }}>
      <Typography variant="h4">Cart</Typography>
      {cart.length===0 ? <Typography sx={{ mt:2 }}>Your cart is empty</Typography> : (
        <>
          <List>
            {cart.map(item=>(
              <React.Fragment key={item._id}>
                <ListItem secondaryAction={
                  <div>
                    <IconButton onClick={()=>changeQty(item._id, -1)}>-</IconButton>
                    <Typography component="span" sx={{ mx:1 }}>{item.qty}</Typography>
                    <IconButton onClick={()=>changeQty(item._id, 1)}>+</IconButton>
                    <IconButton edge="end" onClick={()=>remove(item._id)}><DeleteIcon /></IconButton>
                  </div>
                }>
                  <ListItemText primary={item.title} secondary={`$${(item.price*item.qty).toFixed(2)}`} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <Box sx={{ mt:2 }}>
            <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
            <Button variant="contained" sx={{ mt:2 }} onClick={()=>alert('Checkout placeholder')}>Checkout</Button>
          </Box>
        </>
      )}
    </Container>
  );
}
