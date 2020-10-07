import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography
} from '@material-ui/core';

import CreateNewMap from './CreateNewMap';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const Toolbar = ({ className, maps, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box>
        <Card>
          <CardContent>
            <Box>
              <Typography align="center" color="textPrimary" variant="h1">
                You have created {maps} {maps > 1 ? 'maps' : 'map'}
              </Typography>
              <br />
              <Typography align="center" color="textPrimary" variant="h1">
                <CreateNewMap />
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
