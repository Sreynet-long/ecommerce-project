import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Badge, InputBase, Drawer, List, ListItem, ListItemText } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header({ cartCount=0, onToggleTheme, onSearch }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: 'primary.main' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={()=>setOpen(true)} sx={{ mr:1 }}>
            <MenuIcon />
          </IconButton>
          <Link href="/" legacyBehavior>
            <a style={{ textDecoration:'none', color:'inherit' }}>
              <Typography variant="h6" sx={{ mr:3 }}>Fresh Mart</Typography>
            </a>
          </Link>
          <div style={{ flex:1 }}>
            <InputBase placeholder="Search products..." onKeyDown={(e)=>{ if(e.key==='Enter') onSearch && onSearch(e.target.value) }} sx={{ ml:1, background:'rgba(255,255,255,0.08)', px:1, borderRadius:1, width:'100%', maxWidth:420 }} />
          </div>
          <IconButton color="inherit" onClick={onToggleTheme}><Brightness4Icon/></IconButton>
          <Link href="/cart" legacyBehavior>
            <IconButton color="inherit"><Badge badgeContent={cartCount} color="secondary"><ShoppingCartIcon/></Badge></IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={()=>setOpen(false)}>
        <List sx={{ width:250 }}>
          <ListItem button><ListItemText primary="Home" /></ListItem>
          <ListItem button><ListItemText primary="Categories" /></ListItem>
          <ListItem button><ListItemText primary="Orders" /></ListItem>
        </List>
      </Drawer>
    </>
  );
}
