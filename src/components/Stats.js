//import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
//import { Modal, Grid, Typography } from '@mui/material';
import {IoIosStats} from "react-icons/io"
//import CloseIcon from '@mui/icons-material/Close';
//import EasyModeNoSolution from './EasyModeNoSolution';
//import EasyModeSolution from './EasyModeSolution';

/*const style = {
  maxWidth: 1200,
  maxHeight: 700,
  width: '75%',
  bgcolor: '#eddee1',
  borderRadius: '10px',
  margin: '2.5% auto',
  textAlign: 'center',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  px: 3,
  py: 2
};

const styleMobile = {
  maxWidth: '325px',
  bgcolor: '#eddee1',
  borderRadius: '10px',
  margin: '15% auto',
  textAlign: 'center',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  px: 3,
  py: 2,
  overflow: 'scroll'
};

const styleNoSolution = {
  maxWidth: '325px',
  bgcolor: '#eddee1',
  borderRadius: '10px',
  margin: '10% auto',
  textAlign: 'center',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  px: 3,
  py: 2
};*/

function Stats(props) {

    return (
      <>
        <IconButton color="primary" /*onClick={handleOpen}*/>
          <IoIosStats/>
        </IconButton>
      </>
    );
  
};

export default Stats;