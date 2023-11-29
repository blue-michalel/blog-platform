import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

const Loader: React.FC = React.memo(() => {
  return (
    <Backdrop open={true} sx={{ background: 'transparent', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <CircularProgress />
    </Backdrop>
  );
});

Loader.displayName = 'Loader';

export default Loader;
