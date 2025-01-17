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
  TextField
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

  const onSubmit = e => {
    e.preventDefault();
    let elements = e.target.elements;
    let floorNo = elements.floorNo.value;
    let height = elements.height.value;
    let floorname = elements.floorName.value;
    let floorImg = elements.floorImg.files[0];
    let formData = new FormData();
    // formData.append('locid', e.email);
    formData.append('map_name', floorname);
    formData.append('height', height);
    formData.append('floor_num', floorNo);
    formData.append('image', floorImg);
    fetch('https://api.arway.xyzmap-apiadd_floor_planindex.php', {
      // content-type header should not be specified!
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(success => {
        console.log(success);
      })
      .catch(error => console.log(error));
  };
  return (
    <div>
      <Button
        color="primary"
        style={{ margin: 10 }}
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
        <form autoComplete="off" noValidate onSubmit={onSubmit}>
          <DialogContent>
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
                      name="floorName"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      // helperText="Please specify the first name"
                      label="Floor No. *"
                      name="floorNo"
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      helperText="in meters"
                      name="height"
                      type="number"
                      label="Floor Height *"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Floorplan file (PNG Or JPEG)"
                      name="floorImg"
                      type="file"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              // onClick={handleClose}
              type="submit"
            >
              Save
            </Button>
            <Button
              color="background"
              variant="contained"
              onClick={handleClose}
            >
              Close
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
AddFloorPlan.propTypes = {
  className: PropTypes.string
};
