import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';
import { Loader } from 'components/Loader';
import { selectFetchPost, selectLoading, selectPost, useStore } from './store';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const Post: React.FC = React.memo(() => {
  const { id } = useParams();

  const fetch = useStore(selectFetchPost);
  const data = useStore(selectPost);
  const isLoading = useStore(selectLoading);

  useEffect(() => {
    if (!data && id) {
      fetch(id);
    }
  }, [data, fetch, id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <Header title={data.title} createTime={data.createTime} />
      <Typography style={{ padding: '20px' }}>{data.content}</Typography>
      <Footer />
    </>
  );
});

Post.displayName = 'Post';

export default Post;
