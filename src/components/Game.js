import React from 'react';
import { Box, Grid } from "@mui/material";
//import PropTypes from "prop-types";

function Game(props) {

  return (
    <Box 
      sx={{
        overflowX: 'auto', WebkitTextSizeAdjust: 'none', my: 5
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          minWidth: 823
        }}
      >
        <Box
        component="img"
        sx={{
          height: 400,
          width: 350,
        }}
        alt="Guess the character for today"
        src="https://m.media-amazon.com/images/I/51q5aPFvhaL._AC_SL1200_.jpg"
      />
      </Grid>
    </Box>
  );
}

export default Game;

/*Game.propTypes = {
  characters: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired
};*/