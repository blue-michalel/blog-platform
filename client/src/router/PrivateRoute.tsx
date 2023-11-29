import { Navigate, Outlet } from 'react-router-dom';
import { RootRoutes } from './routes';

const PrivateRoute = () => {
  const auth = false;

  return auth ? <Outlet /> : <Navigate to={RootRoutes.LOGIN} />;
};

export default PrivateRoute;
