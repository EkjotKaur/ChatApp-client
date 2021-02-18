import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';

import './ErrorModal.css';

const ErrorModal = ({heading, message, onClick}) =>  {
  const [open, setOpen] = React.useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {heading}
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="modal"
      >
        <DialogTitle id="alert-dialog-title" className="title">{heading}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="text-error">
          {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" autoFocus onClick={onClick} >
            <Link className="error-btn" to="/">Okay</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ErrorModal;