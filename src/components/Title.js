import { Stack, Paper } from "@mui/material";
import Turn from "./Turn";

const titleStyle = {
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#b7c9e2",
  color: "#080357",
  fontSize: "75px"
}

const subTitleStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "#b7c9e2",
  color: "#086788",
  fontSize: "20px",
  mx: 10
}

function Title(props) {

  const { turn } = props

  return (
    
    <Stack>
      <Paper 
        elevation={0} 
        square={true}
        sx={titleStyle}
      >
          CLASHLE
      </Paper>
      <Paper 
        elevation={0} 
        square={true}
        sx={subTitleStyle}
      >
          CLASH ROYAL CHARACTER GUESSING GAME 
      </Paper>
      <Turn 
        turn={turn}
      />
    </Stack>
  );
}

export default Title;