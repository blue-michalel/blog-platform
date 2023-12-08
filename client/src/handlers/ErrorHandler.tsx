import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from 'zustand';

import { useStore as useNavigationStore } from 'store/navigation';

const ErrorHandler: React.FC = () => {
  const { activeErrorPage } = useStore(useNavigationStore);

  if (activeErrorPage) {
    return <Navigate to={activeErrorPage} />;
  }

  return null;
};

ErrorHandler.displayName = 'ErrorHandler';

export default ErrorHandler;
