import React, { useEffect } from 'react';

import { withLayout } from 'containers/Layout';
import { Post } from './components/Post';

import { Backdrop, CircularProgress } from '@mui/material';
import { selectData, selectFetchAll, selectLoading, usePostState } from 'store/posts';

const Home: React.FC = React.memo(() => {
  const fetch = usePostState(selectFetchAll);
  const data = usePostState(selectData);
  const isLoading = usePostState(selectLoading);

  useEffect(() => {
    if (!data.length) {
      fetch();
    }
  }, [data.length, fetch]);

  if (isLoading) {
    return (
      <Backdrop open={isLoading} sx={{ background: 'transparent', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress />
      </Backdrop>
    );
  }

  return data.map(({ id, ...data }) => <Post key={id} data={data} />);
});

Home.displayName = 'Home';

const HomeLayout = withLayout(Home);

export default HomeLayout;
