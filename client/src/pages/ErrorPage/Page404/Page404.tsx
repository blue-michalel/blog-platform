import { Button, Grid, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootRoutes } from 'router/routes';
import { useStore } from 'zustand';

import { withLayout } from 'containers/Layout';
import { useStore as useNavigationStore } from 'store/navigation';

const Page404: React.FC = React.memo(() => {
  const { clearError } = useStore(useNavigationStore);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    clearError();
    navigate(RootRoutes.HOME);
  }, [clearError, navigate]);

  return (
    <Grid container justifyContent="center" alignItems="center" direction="column">
      <Typography variant="h1" align="center" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" align="center" paragraph>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        The page you are looking for might be under construction or does not exist.
      </Typography>
      <Button onClick={() => handleClick()} variant="contained" color="primary">
        Go to Home
      </Button>
    </Grid>
  );
});

Page404.displayName = 'Page404';

const Page404Layout = withLayout(Page404);

export default Page404Layout;
