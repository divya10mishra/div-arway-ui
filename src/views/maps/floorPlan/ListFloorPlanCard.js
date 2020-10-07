import {
  Box,
  Button,
  Card,
  colors,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Snackbar,
  Typography
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';

export default function ListFloorPlanCard({ floor }) {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [severity, setSeverity] = React.useState('success');
  const [message, setMessage] = React.useState(
    'Floor plan Deleted Successfully'
  );
  const [showToaster, setShowToaster] = React.useState(false);

  const handleCloseToaster = () => {
    setShowToaster(false);
  };
  const onRemoveFloorPlan = async () => {
    const url = 'http://localhost/platform-code/map-api/remove_floor_plan/';
    let formData = new FormData();
    formData.append('id', floor.id);
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
      window.location.reload();
    } else {
      setSeverity('error');
      setMessage('Unable to delete map Plaease try later');
      setShowToaster(true);
      setOpen(false);
    }
  };

  return (
    <Card>
      <Snackbar
        open={showToaster}
        autoHideDuration={5000}
        onClose={handleCloseToaster}
      >
        <Alert onClose={handleCloseToaster} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      <Grid container spacing={1}>
        <Grid item sm={12} md={5}>
          <img
            src={floor.image}
            style={{ height: 160, width: 250 }}
            alt="new"
          />
        </Grid>
        <Grid item sm={12} md={7}>
          <Box>
            <Typography
              align="left"
              style={{ marginTop: 30 }}
              color="textPrimary"
              variant="h5"
            >
              {floor.name}
            </Typography>
            <Typography
              align="left"
              style={{ marginTop: 15 }}
              color="textSecondary"
              variant="body1"
            >
              Floor {floor.floor_num} - Height: {floor.height} meters
            </Typography>
            <Button
              style={{ marginTop: 13, background: colors.red[500] }}
              onClick={onOpen}
              variant="contained"
              // onClick={handleClickOpen}
            >
              Remove Floor
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Typography
        align="left"
        color="textSecondary"
        variant="body1"
        style={{ margin: 10 }}
      >
        Created on: {floor.create_on}
      </Typography>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm actions</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete the '{floor.name}' Floor?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
          <Button
            onClick={onRemoveFloorPlan}
            variant="contained"
            color="primary"
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
