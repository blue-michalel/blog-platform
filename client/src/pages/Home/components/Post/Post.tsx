import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { Post as PostResponse } from 'services/models';
import { useTime } from 'hooks';

export interface Props {
  data: Omit<PostResponse, 'id'>;
}

const Post: React.FC<Props> = React.memo(({ data }) => {
  const time = useTime(data.createTime);

  return (
    <Grid pt={2}>
      <Card>
        <CardContent>
          <Typography variant='h6' component='h1' gutterBottom>
            {data.title}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            Author Name - {time}
          </Typography>
          <Typography variant='body1'>{data.short}</Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Read more</Button>
        </CardActions>
      </Card>
    </Grid>
  );
});

Post.displayName = 'Post';

export default Post;
