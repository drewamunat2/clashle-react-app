//import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
//import { Modal, Typography, Grid, Box } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
//import CloseIcon from '@mui/icons-material/Close';

/*const style = {
  maxWidth: '750px',
  bgcolor: '#eddee1',
  borderRadius: '10px',
  margin: '2% auto',
  textAlign: 'center',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  px: 3,
  py: 2
}

const section = {
  textDecoration: 'underline'
}*/

function Help(props) {


  return (
    <>
      <IconButton color="primary" /*onClick={handleOpen}*/>
        <HelpOutlineIcon/>
      </IconButton>
    </>
  );
};

export default Help;