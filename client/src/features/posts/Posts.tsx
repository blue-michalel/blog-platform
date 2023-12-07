import { Backdrop, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';

import { Post } from './components/Post';
import { selectFetchAll, selectLoading, selectPosts, useStore } from './store';

const Posts: React.FC = React.memo(() => {
  const fetch = useStore(selectFetchAll);
  const data = useStore(selectPosts);
  const isLoading = useStore(selectLoading);

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

  return data.map(({ id, ...data }) => <Post key={id} data={data} id={id} />);
});

Posts.displayName = 'Home';

export default Posts;
