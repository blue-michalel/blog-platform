import { withLayout } from 'containers/Layout';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';
import { Loader } from 'components/Loader';
import { selectFetchPost, selectLoading, selectPost, useFilterPostState } from 'store/posts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

interface Props {}

const Post: React.FC<Props> = React.memo(() => {
  const { id } = useParams();

  const fetch = useFilterPostState(selectFetchPost);
  const data = useFilterPostState(selectPost);
  const isLoading = useFilterPostState(selectLoading);

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

const PostLayout = withLayout(Post);

export default PostLayout;
