import React from 'react';

import { withLayout } from 'containers/Layout';
import { SignIn } from 'features/authentication';

const Login: React.FC = React.memo(() => {
  return <SignIn />;
});

Login.displayName = 'Login';

const LoginPage = withLayout(Login);

export default LoginPage;
