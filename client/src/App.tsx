import { CssBaseline } from '@mui/material';
import { Suspense } from 'react';

import Loading from './pages/Loading';
import Router from './router';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <CssBaseline />
      <Router />
    </Suspense>
  );
}

export default App;
