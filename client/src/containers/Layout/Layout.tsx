import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface Props {}

const Layout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Blog platform
          </Typography>
          {/* <Button color='inherit'>Login</Button> */}
        </Toolbar>
      </AppBar>
      <Box p={3}>{children}</Box>
    </Box>
  );
};

Layout.displayName = 'Layout';

export default Layout;
