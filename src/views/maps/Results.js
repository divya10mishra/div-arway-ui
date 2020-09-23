import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'left',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Results = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="left"
          mb={3}
        >
          {/* <Avatar
            alt="Product"
            src={product.media}
            variant="square"
          /> */}
        </Box>
        <Typography
          align="left"
          color="textPrimary"
          variant="body1"
        >
         <b>Map Name:</b> {product.mapName}
        </Typography>
        <Typography
          align="left"
          color="textPrimary"
          variant="body1"
        >
         <b>Map Type:</b> {product.mapType}
        </Typography> <Typography
          align="left"
          color="textPrimary"
          variant="body1"
        >
         <b>Map Address:</b> {product.mapAddress}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <GetAppIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              {product.totalDownloads}
              {' '}
              Downloads
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default Results;
