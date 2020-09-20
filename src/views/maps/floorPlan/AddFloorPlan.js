import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  //makeStyles
} from '@material-ui/core';

// const useStyles = makeStyles(() => ({
//   root: {}
// }));

export default function AddFloorPlan() {
  const [open, setOpen] = React.useState(false);
  // const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
            color="primary"
            variant="contained"
            onClick={handleClickOpen}
          >
             Add Floor Plan
          </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <form autoComplete="off" noValidate>
            <Card>
              <CardHeader title="New floorplan - sadsa" />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      // helperText="Please specify the first name"
                      label="Floor Name *"
                      name="floorname"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      // helperText="Please specify the first name"
                      label="Floor No. *"
                      name="floorno"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      helperText="in meters"
                      label="Floor Height *"
                      name="firstName"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Floorplan file (PNG Or JPEG)"
                      name="firstName"
                      type="file"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            color="background"
            variant="contained"
            onClick={handleClose}
          >
             Close
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleClose}
          >
             Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
AddFloorPlan.propTypes = {
  className: PropTypes.string
};
