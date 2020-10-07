import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Snackbar,
  Typography
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import MapsView from './index';
import { colors } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';

import React from 'react';
import AddFloorPlan from '../floorPlan/AddFloorPlan';
import Page from 'src/components/Page';
import MapCard from './MapCard';
import { Alert } from '@material-ui/lab';
import { FloorPlanList } from './FloorPlanList';

export default function EditMap(props) {
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState('success');
  const [message, setMessage] = React.useState('Map Deleted Successfully');
  const [showToaster, setShowToaster] = React.useState(false);  
  const [map] = React.useState(JSON.parse(localStorage.getItem('map')));

  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseToaster = () => {
    setShowToaster(false);
  };

  const onDeleteMap = async () => {
    const url = 'http://localhost/platform-code/map-api/remove-map/';
    let formData = new FormData();
    formData.append('id', map.map_id);
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: { 'dev-token': localStorage.accessToken }
    });
    const data = await response.text();
    if (data === 'DONE') {
      setSeverity('success');
      setMessage('Map Deleted Successfully');
      setShowToaster(true);
      setOpen(false);
      localStorage.removeItem('map');
      navigate('/app/studio');
    } else {
      setSeverity('error');
      setMessage('Unable to delete map Plaease try later');
      setShowToaster(true);
      setOpen(false);
    }
  };

  if (map == null) {
    return <MapsView />;
  } else {
    return (
      <Page title="Edit map">
        <Snackbar
          open={showToaster}
          autoHideDuration={5000}
          onClose={handleCloseToaster}
        >
          <Alert onClose={handleCloseToaster} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
        <Container maxWidth={false}>
          <Box display="flex" justifyContent="flex-end">
            <Typography
              align="left"
              color="textPrimary"
              style={{ margin: 10 }}
              variant="h3"
            >
              {map.map_name}
            </Typography>
            <Box flexGrow={1} />
            <Button
              style={{ margin: 10 }}
              color="secondary"
              variant="contained"
              component={RouterLink}
              to={'/app/studio'}
            >
              Back
            </Button>
            <Button
              color="primary"
              style={{ margin: 10 }}
              variant="contained"
              component={RouterLink}
              to={'/app/listMaps'}
            >
              Edit map
            </Button>
            <AddFloorPlan />
            <Button
              style={{ margin: 10, background: colors.red[500] }}
              variant="contained"
              onClick={handleClickOpen}
            >
              Delete Map
            </Button>
          </Box>
          <br />
          <br />
          <Box display="flex" justifyContent="flex-end">
            <Grid container spacing={3}>
              <Grid item lg={8} md={8} xl={8} xs={12}>
             <FloorPlanList buildingId={map.floorid}/>
              </Grid>
              <Grid item lg={4} md={4} xl={4} xs={12}>
                <Box>
                <MapCard map={map} />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Confirm actions</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
    Are you sure you want to delete the '{map.map_name}' map?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained" color="primary">
                Close
              </Button>
              <Button
                onClick={onDeleteMap}
                variant="contained"
                color="primary"
                autoFocus
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Page>
    );
  }
}
