import { Grid, AppBar, Toolbar, useMediaQuery } from '@mui/material';

import Info from "./Info";
import { ExpandedSocial, ContainedSocial} from "./Social";
import { theme } from "../styles/Styles"

function Header(props) {

  const expand = useMediaQuery(theme.breakpoints.up('laptop'));
  //const {openHelp, mode, solution, noTurn, turn, isCorrect, colors, totalGamesWon, totalGamesPlayed, timer} = props;

  return (
    <AppBar position="static" sx={{backgroundColor:'#b7c9e2'}}>
        <Toolbar disableGutters>
          <Grid container>
            <Grid item xs={6}>
              <Info />
            </Grid>
            <Grid item xs={6}>
              { expand ? <ExpandedSocial /> : <ContainedSocial /> }
            </Grid>
          </Grid>
        </Toolbar>
    </AppBar>
  );
};

export default Header;