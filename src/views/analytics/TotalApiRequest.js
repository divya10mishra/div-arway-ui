import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Divider,
  colors,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    border:'1px solid '+colors.green[500]

  }
}));

const TotalApiRequest = ({ className, ...rest }) => {
  const classes = useStyles();
  const totalApiReq = 0;
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
            Total Api Request This Month{' '}
          </Typography>
          <br />
          <Typography
            color="textPrimary"
            variant="h4"
            style={{ textAlign: 'center' }}
          >
            {totalApiReq}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

TotalApiRequest.propTypes = {
  className: PropTypes.string
};

export default TotalApiRequest;
