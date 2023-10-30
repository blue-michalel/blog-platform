import React from 'react';

import Router from './router';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <CssBaseline />
      <Router />
    </>
  );
}

export default App;
