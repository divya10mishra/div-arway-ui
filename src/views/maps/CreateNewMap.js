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


export default function CreateNewMap(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const onSubmit = (e) =>{
    e.preventDefault()
    let elements = e.target.elements;
    let description = elements.description.value;
    let type = elements.type.value;
    let address = elements.address.value;
    let mapName = elements.mapName.value;
    let lat = elements.lat.value;
    let lng = elements.lng.value;
    let mapImage = elements.mapImage.files[0];
      let formData = new FormData();
      formData.append('name', mapName);
      formData.append('type', type);
      formData.append('desc', description);
      formData.append('address', address);
      formData.append('lat', lat);
      formData.append('lon', lng);
      formData.append('image', mapImage?mapImage:null);
      fetch('http://localhost/platform-code/server-api/image/upload_map_image.php', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(success => {
          console.log(success);
        })
        .catch(error => console.log(error)
      );   
  }

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
      > <form autoComplete="off" noValidate  onSubmit={onSubmit}>
        <DialogContent>
         
            <Card>
              <CardHeader title="Creatre new map" />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Map Name *"
                        name="mapName"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Map Description"
                        name="description"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Map Type *"
                        name="type"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        helperText="Building Image"
                        name="mapImage"
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

        </DialogContent>
        <DialogActions>
          <Button color="background" variant="contained" onClick={handleClose}>
            Close
          </Button>
          <Button color="primary" variant="contained" type="submit">
            Save
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
CreateNewMap.propTypes = {
  className: PropTypes.string
};
