import React from 'react';

import { withLayout } from 'containers/Layout';
import { Posts } from 'features/posts';

const Home: React.FC = React.memo(() => {
  return <Posts />;
});

Home.displayName = 'Home';

const HomeLayout = withLayout(Home);

export default HomeLayout;
