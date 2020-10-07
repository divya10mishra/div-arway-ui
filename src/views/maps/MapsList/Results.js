import React from 'react';
import PropTypes from 'prop-types';
import {  useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import Map from './Map';

const useStyles = makeStyles(theme => ({
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

const Results = ({ className, google, map, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const onEditMap =() =>{
    navigate('/app/editMap');
   localStorage.setItem('map',JSON.stringify(map));
  }
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
        {map.map_image && (
          <img
            src={map.map_image}
            style={{ height: 200, width: 335 }}
            alt="new"
          />
        )}
        {!map.map_image && (
          <Map
            google={google}
            height={200}
            center={{
              lat: Number(map.map_location.latitude),
              lng: Number(map.map_location.longitude)
            }}
            zoom={15}
          />
        )}

        <CardContent>
          <Box display="flex" justifyContent="left" mb={3}>
            {/* <Avatar
            alt="map"
            src={map.media}
            variant="square"
          /> */}
          </Box>
          <Typography align="left" color="textPrimary" variant="h6">
            {map.map_name}
          </Typography>
          <Typography align="left" color="textSecondary" variant="h6">
            {map.map_address.replaceAll('%2C+', ',').replaceAll('+', ' ')}
          </Typography>
          <Typography align="left" color="textSecondary" variant="h6">
            sample Description
          </Typography>
        </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid container justify="space-between" spacing={2}>
          <Grid className={classes.statsItem} item>
          <Button
            style={{ margin: 10 }}
            color="primary"
            variant="contained"
            onClick={onEditMap}
          >
            Edit Map
          </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  map: PropTypes.object.isRequired
};

export default Results;
