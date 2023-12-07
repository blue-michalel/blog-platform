import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import ErrorHandler from './ErrorHandler';
import { ErrorsRoutes, RootRoutes } from './routes';

const Home = React.lazy(() => import('pages/Home'));
const Post = React.lazy(() => import('pages/Post'));
const Login = React.lazy(() => import('pages/Login'));

const Page404 = React.lazy(() => import('pages/ErrorPage/Page404'));

const Router: React.FC = () => (
  <BrowserRouter>
    <ErrorHandler />
    <Routes>
      <Route path={RootRoutes.HOME} Component={Home} />
      <Route path={RootRoutes.POST} Component={Post} />
      <Route path={RootRoutes.LOGIN} Component={Login} />

      <Route path={ErrorsRoutes.PAGE_404} Component={Page404} />

      <Route path="*" element={<Navigate to={ErrorsRoutes.PAGE_404} />} />
    </Routes>
  </BrowserRouter>
);

Router.displayName = 'Router';

export default Router;
