import { Badge, Grid, Typography } from "@mui/material";
import { ResultProps } from "./types";
import { ResultEnum } from "../../types";
import TotalScore from "./total-score";

const Result: React.FC<ResultProps> = ({
  userChoice,
  computerChoice,
  result,
  winCount,
  loseCount,
  handleReset,
}) => {
  return (
    <>
      <Typography
        component="p"
        variant="h2"
        align="center"
        mt={8}
        mb={1}
        sx={{
          mt: {
            xs: 4,
            sm: 5,
            md: 6,
            lg: 8,
            xl: 8,
          },
          fontSize: {
            xs: "2.5rem",
            sm: "2.5rem",
            md: "3rem",
            lg: "3.75rem",
            xl: "3.75rem",
          },
        }}
      >
        {userChoice}{" "}
        <Typography
          component="span"
          variant="h4"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "1.5rem",
              md: "1.75rem",
              lg: "2.125rem",
              xl: "2.125rem",
            },
          }}
        >
          vs
        </Typography>{" "}
        {computerChoice}
      </Typography>

      <Typography
        component="p"
        variant="h4"
        align="center"
        mb={5}
        color={
          result === ResultEnum.Win
            ? "success.main"
            : result === ResultEnum.Lose
            ? "error.main"
            : "warning.main"
        }
        sx={{
          fontSize: {
            xs: "2rem",
            sm: "2rem",
            md: "2rem",
            lg: "2.125rem",
            xl: "2.125rem",
          },
        }}
      >
        {result?.toUpperCase()}
      </Typography>

      <TotalScore
        winCount={winCount}
        loseCount={loseCount}
        handleReset={handleReset}
      />
    </>
  );
};

export default Result;
