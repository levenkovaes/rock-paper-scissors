import { useState } from "react";
import { Box, Grid } from "@mui/material";
import Confetti from "react-confetti";
import Choices from "../choices";
import Result from "../results";
import "./styles.scss";
import { determineWinner, getRandomChoice } from "../../utils";
import { ChoicesEnum, ResultEnum } from "../../types";

const Game: React.FC = () => {
  const [userChoice, setUserChoice] = useState<ChoicesEnum | null>(null);
  const [computerChoice, setComputerChoice] = useState<ChoicesEnum | null>(
    null
  );
  const [result, setResult] = useState<ResultEnum | null>(null);
  const [loseCount, setLoseCount] = useState<number>(0);
  const [winCount, setWinCount] = useState<number>(0);

  const handlePlayGame = (choice: ChoicesEnum) => {
    const randomChoice = getRandomChoice();

    setUserChoice(choice);
    setComputerChoice(randomChoice);

    const result = determineWinner(choice, randomChoice);

    if (result === ResultEnum.Lose) {
      setLoseCount((prev) => {
        return prev + 1;
      });
    } else if (result === ResultEnum.Win) {
      setWinCount((prev) => {
        return prev + 1;
      });
    }
    setResult(() => {
      return result;
    });
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Box
        key={loseCount}
        className={result === ResultEnum.Lose ? "shake" : ""}
      >
        <Choices onUserChoice={handlePlayGame} />
        {userChoice && computerChoice && (
          <Result
            userChoice={userChoice}
            computerChoice={computerChoice}
            result={result}
            winCount={winCount}
            loseCount={loseCount}
          />
        )}
      </Box>
      {result === ResultEnum.Win && <Confetti key={winCount} recycle={false} />}
    </Grid>
  );
};

export default Game;
