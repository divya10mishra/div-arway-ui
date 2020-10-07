import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  Typography,
  makeStyles,
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

const MapCard = ({ className, google, map, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
        <CardContent>
          <Typography align="left" color="textPrimary" variant="body1">
          Location Details :
          </Typography>
          <br/>
          <Typography align="left" color="textSecondary" variant="body1">
          Location ID :<br/> {map.floorid}
          </Typography>
          <br/>
          <Typography align="left" color="textSecondary" variant="body1">
          Created at : {map.created_at}
          </Typography>
          <br/>
          <Typography align="left" color="textSecondary" variant="body1">
          Address : {map.map_address.replaceAll('%2C+', ',').replaceAll('+', ' ')}
          </Typography>
          <br/>
     
          <Map
            google={google}
            height={320}
            center={{
              lat: Number(map.map_location.latitude),
              lng: Number(map.map_location.longitude)
            }}
            zoom={15}
          />
        </CardContent>
      <Box flexGrow={1} />
    </Card>
  );
};

MapCard.propTypes = {
  className: PropTypes.string,
  map: PropTypes.object.isRequired
};

export default MapCard;
