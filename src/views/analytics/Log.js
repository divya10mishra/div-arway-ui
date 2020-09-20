import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Divider,
  makeStyles,
  TextField,
  colors,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    border:'1px solid '+colors.green[500]

  }
}));

const Log = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Divider />
      <CardContent>
        <Box height={80} position="relative">
          <Typography color="textPrimary" variant="h2">
            Log:
          </Typography>
          <br />
          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box display="flex" justifyContent="flex-start" p={2}>
        <Typography color="textSecondary" variant="h6">
          {' '}
          No Api Request were made on this day
        </Typography>
      </Box>
    </Card>
  );
};

Log.propTypes = {
  className: PropTypes.string
};

export default Log;
