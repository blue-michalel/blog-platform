import React from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigationStore } from 'store/navigation';
import { useStore } from 'zustand';

const ErrorHandler: React.FC = () => {
  const { activeErrorPage } = useStore(useNavigationStore);

  if (activeErrorPage) {
    return <Navigate to={activeErrorPage} />;
  }

  return null;
};

ErrorHandler.displayName = 'ErrorHandler';

export default ErrorHandler;
