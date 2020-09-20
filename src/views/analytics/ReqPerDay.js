import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { LineChart as Line } from 'react-chartkick';
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

const ReqPerDay = ({ className, ...rest }) => {
  const classes = useStyles();
  const data = {
    '2017-05-13': 2,
    '2017-05-14': 5,
    '2017-05-15': 12,
    '2017-05-16': 17,
    '2017-05-17': 2,
    '2017-05-18': 5,
    '2017-05-19': 20,
    '2017-05-20': 15
  };
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Divider />
      <CardContent>
        <Box height={320} position="relative">
          <Typography color="textPrimary" variant="h2">
            Request Per Day:
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
          
          <br />
          <br />
          <Line height={220} data={data}  colors={[colors.green[500]]}/>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

ReqPerDay.propTypes = {
  className: PropTypes.string
};

export default ReqPerDay;
