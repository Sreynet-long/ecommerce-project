import * as React from 'react';
import Head from 'next/head';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useState, useMemo } from 'react';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: '#0f6b52' }
    },
    shape: { borderRadius: 12 }
  }), [mode]);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} themeMode={mode} toggleTheme={() => setMode(m => (m==='light'?'dark':'light'))} />
      </ThemeProvider>
    </>
  );
}
