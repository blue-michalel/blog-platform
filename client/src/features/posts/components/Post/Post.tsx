import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { useTime } from 'hooks';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootRoutes } from 'router/routes';

import { Post as PostResponse } from '../../models/post';

export interface Props {
  data: Omit<PostResponse, 'id'>;
  id: string;
}

const Post: React.FC<Props> = React.memo(({ data, id }) => {
  const navigate = useNavigate();

  const time = useTime(data.createTime);

  const onClick = useCallback(() => {
    navigate(RootRoutes.POST.replace(':id', String(id)));
  }, [id, navigate]);

  return (
    <Grid pt={2}>
      <Card>
        <CardContent>
          <Typography variant="h6" component="h1" gutterBottom>
            {data.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Author Name - {time}
          </Typography>
          <Typography variant="body1">{data.short}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onClick}>
            Read more
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
});

Post.displayName = 'Post';

export default Post;
