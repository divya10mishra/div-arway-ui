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
import Map from './Map';

// const useStyles = makeStyles(() => ({
//   root: {}
// }));

export default function CreateNewMap(props) {
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
      <Button color="primary" variant="contained" onClick={handleClickOpen}>
        Add new map
      </Button>
      <Dialog
        style={{ zIndex: 2 }}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <form autoComplete="off" noValidate>
            <Card>
              <CardHeader title="Creatre new map" />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Map Name *"
                        name="floorname"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Map Description"
                        name="floorno"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Map Type *"
                        name="firstName"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        helperText="Building Image"
                        name="firstName"
                        type="file"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <Map
                        google={props.google}
                        center={{ lat: 26.230299, lng: 81.240891 }}
                        zoom={15}
                      />
                    </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="background" variant="contained" onClick={handleClose}>
            Close
          </Button>
          <Button color="primary" variant="contained" onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
CreateNewMap.propTypes = {
  className: PropTypes.string
};
