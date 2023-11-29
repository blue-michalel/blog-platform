import { Suspense } from 'react';
import Router from './router';
import { CssBaseline } from '@mui/material';

import Loading from './pages/Loading';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <CssBaseline />
      <Router />
    </Suspense>
  );
}

export default App;
