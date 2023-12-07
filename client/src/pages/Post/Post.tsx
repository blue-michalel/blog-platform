import React from 'react';

import { withLayout } from 'containers/Layout';
import { Post } from 'features/post';

const PostPage: React.FC = React.memo(() => {
  return <Post />;
});

PostPage.displayName = 'PostPage';

const PostLayout = withLayout(PostPage);

export default PostLayout;
