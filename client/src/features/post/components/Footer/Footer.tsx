import { Button, Toolbar } from '@mui/material';
import React, { useCallback } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = React.memo(() => {
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Toolbar component='nav' variant='dense' sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
      <Button startIcon={<ArrowBackIcon />} onClick={onBackClick}>
        Back
      </Button>
    </Toolbar>
  );
});

Footer.displayName = 'Footer';

export default Footer;
