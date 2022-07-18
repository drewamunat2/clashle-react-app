import { Paper, IconButton } from '@mui/material';

import Settings from './Settings';
import Help from './Help';
import Stats from './Stats';

const paperStyleLeftJustified = {
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: '#b7c9e2'
}

function Info(props) {

  //const {openHelp, mode, solution, noTurn, turn, isCorrect, colors, timer, totalGamesWon, totalGamesPlayed } = props;

  return (
    <>
      <Paper 
        elevation={0} 
        square={true}
        style={paperStyleLeftJustified}
      > 
      <IconButton />
      <Help />
      <Settings />
      <Stats />
    </Paper>
  </>
  );
};

export default Info;