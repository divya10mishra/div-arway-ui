import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="./" />
      <Avatar alt="Travis Howard" src="./../../../../public/smile1.jpg" />
      <Avatar alt="Cindy Baker" src="./../../../../public/smile2.jpg" />
    </div>
  );
}
