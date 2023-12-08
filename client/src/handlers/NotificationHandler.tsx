import { Alert, Snackbar, SnackbarOrigin } from '@mui/material';
import React from 'react';

import { selectDismiss, selectShow, selectText, selectVariant, useStore } from 'store/notification';

const position: SnackbarOrigin = {
  horizontal: 'right',
  vertical: 'top'
};

const NotificationHandler: React.FC = React.memo(() => {
  const open = useStore(selectShow);
  const text = useStore(selectText);
  const variant = useStore(selectVariant);

  const handleClose = useStore(selectDismiss);

  return (
    <Snackbar open={open} anchorOrigin={position} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={variant ?? 'info'} sx={{ width: '100%' }}>
        {text}
      </Alert>
    </Snackbar>
  );
});

NotificationHandler.displayName = 'NotificationHandler';

export default NotificationHandler;
