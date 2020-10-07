import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {Send} from 'react-feather';
import PropTypes from 'prop-types';
import {
  Button,
  TextField,
  // makeStyles,
   Badge, IconButton, Typography
} from '@material-ui/core';

// const useStyles = makeStyles(() => ({
//   root: {}
// }));

export default function Feedback() {
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
          <IconButton 
            onClick={handleClickOpen}
          color="inherit">
            <Badge
              color="primary"
              variant="dot"
            >
              <Send/>
            </Badge>
            <Typography
              color="textPrimary"
              style={{marginTop:4,marginLeft:3}}
              gutterBottom
              variant="h5"
            >
             Feedback ?
            </Typography>
          </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
                    <TextField
                    style={{width:350}}
                    inputProps={{
                      style: {
                        height:110,
                        padding: '0 14px',
                      },
                  }}
                      fullWidth
                      label="Feedback about this page?"
                      name="floorname"
                      multiline
                      variant="outlined"
                    />
        </DialogContent>
        <DialogActions>
          <Button
            color="background"
            variant="contained"
            onClick={handleClose}
          >
             Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleClose}
          >
             Send feedback
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
Feedback.propTypes = {
  className: PropTypes.string
};
