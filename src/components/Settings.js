//import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
//import { Modal, Grid, Typography, Switch, Link} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
//import CloseIcon from '@mui/icons-material/Close';

/*const style = {
  maxWidth: '350px',
  bgcolor: '#eddee1',
  borderRadius: '10px',
  margin: '100px auto',
  textAlign: 'center',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  px: 3,
  py: 2
};*/

function Settings() {

  /*const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };*/

  return (
    <>
      <IconButton color="primary" /*onClick={handleOpen}*/>
        <SettingsIcon/>
      </IconButton>
    </>
  );
};

export default Settings;