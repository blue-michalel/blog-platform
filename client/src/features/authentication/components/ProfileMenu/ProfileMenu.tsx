import Login from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import { Divider, ListItemIcon, MenuItem } from '@mui/material';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootRoutes } from 'router/routes';

import { selectIsLoggedIn, useStore } from '../../store';

interface Props {
  handleClose(): void;
}

const ProfileMenu: React.FC<Props> = React.memo(({ handleClose }) => {
  const isLoggedIn = useStore(selectIsLoggedIn);

  const navigate = useNavigate();

  const navigateToLogin = useCallback(() => {
    navigate(RootRoutes.LOGIN);
  }, [navigate]);

  if (!isLoggedIn) {
    return (
      <MenuItem onClick={navigateToLogin}>
        <ListItemIcon>
          <Login fontSize="small" />
        </ListItemIcon>
        Sign in
      </MenuItem>
    );
  }

  return (
    <>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </>
  );
});

ProfileMenu.displayName = 'ProfileMenu';

export default ProfileMenu;
