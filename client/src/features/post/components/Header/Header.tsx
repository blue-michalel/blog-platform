import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Grid, Typography } from '@mui/material';
import React from 'react';

import { useTime } from 'hooks';

import { Post } from '../../models/post';

interface Props {
  title: Post['title'];
  createTime: Post['createTime'];
}

const Header: React.FC<Props> = React.memo(({ createTime, title }) => {
  const date = useTime(createTime);

  return (
    <div>
      <Typography align="center" variant="h4" sx={{ margin: 'auto' }}>
        {title}
      </Typography>

      <Grid container justifyContent="center">
        <CalendarTodayIcon fontSize="small" color="disabled" sx={{ marginRight: '5px' }} />
        <Typography align="center" color="text.secondary" sx={{ marginRight: '15px' }}>
          Publish date: {date}
        </Typography>
      </Grid>
    </div>
  );
});

Header.displayName = 'Header';

export default Header;
