import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title"
import Search from "./components/Search";
import Game from "./components/Game";

function App() {

  const [turn, setTurn] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [noTurn, setNoTurn] = useState(false);

  return (
    <Box sx={{minWidth: '315', bgcolor: '#b7c9e2', height: '100%'}}>
      <Header />
      <Title
        turn={turn}
      />
      <Search 
        noTurn={noTurn}
        isCorrect={isCorrect}
      />
      <Game />
    </Box>
  );
}

export default App;
