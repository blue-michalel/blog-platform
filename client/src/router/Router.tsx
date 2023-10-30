import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loading from 'pages/Loading';
import { RootRoutes } from './routes';

const Home = React.lazy(() => import('pages/Home'));

const router = createBrowserRouter([
  {
    id: 'root',
    path: RootRoutes.HOME,
    Component: Home,
  },
]);

const Router: React.FC = () => <RouterProvider router={router} fallbackElement={<Loading />} />;

Router.displayName = 'Router';

export default Router;
