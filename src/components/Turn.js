import { Paper } from "@mui/material";

const paperStyle = {
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#b7c9e2",
  color: "#FF4242"
}

function Turn(props) {

  const { turn } = props;

  if( turn > 0 ) {
    return (
      <Paper 
        elevation={0} 
        square={true}
        sx={paperStyle}
      >
        {turn + ' of 8 guesses'} 
      </Paper>
    );
  } else {
    return (
      <Paper 
        elevation={0} 
        square={true}
        sx={paperStyle}
      >
        Select a character to begin!
      </Paper>
    )
  }
}

export default Turn;