import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Divider,
  makeStyles,
  colors,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    border:'1px solid '+colors.green[500]
  }
}));

const AccessToken = ({ className, ...rest }) => {
  const classes = useStyles();
  const accessToken = 'dosjdoisjdiojfosjkfos';
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Divider />
      <CardContent>
        <Box height={100} position="relative">
          <Typography
            color="textPrimary"
            variant="h2"
            style={{ textAlign: 'center' }}
          >
            Your Access Token :
          </Typography>
          <br />
          <Typography
            color="textPrimary"
            variant="h4"
            style={{ textAlign: 'center' }}
          >
            {accessToken}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

AccessToken.propTypes = {
  className: PropTypes.string
};

export default AccessToken;
