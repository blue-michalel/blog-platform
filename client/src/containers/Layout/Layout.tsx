import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';

import { Profile } from 'features/authentication';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog platform
          </Typography>
          <Profile />
        </Toolbar>
      </AppBar>
      <Box p={3}>{children}</Box>
    </Box>
  );
};

Layout.displayName = 'Layout';

export default Layout;
