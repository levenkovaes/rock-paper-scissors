import { Badge, Button, Grid, Paper, Typography } from "@mui/material";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import { TotalScoreProps } from "./types";

const TotalScore: React.FC<TotalScoreProps> = ({
  winCount,
  loseCount,
  handleReset,
}) => {
  return (
    <Paper
      elevation={3}
      square={false}
      sx={{
        backgroundColor: "primary.light",
        padding: "16px",
        marginBottom: "20px",
      }}
    >
      <Grid container direction="column" alignItems="center">
        <Typography component="p" variant="h5" align="center" mb={2}>
          Total score
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
          mb={2}
        >
          <Grid item>
            <Badge badgeContent={winCount} color="success">
              <Person2RoundedIcon color="success" fontSize="large" />
            </Badge>
          </Grid>
          <Grid item>
            <Typography component="p" variant="h6" align="center">
              —
            </Typography>
          </Grid>
          <Grid item>
            <Badge badgeContent={loseCount} color="error">
              <ComputerRoundedIcon color="error" fontSize="large" />
            </Badge>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          disableElevation
          color="success"
          onClick={handleReset}
        >
          Reset score
        </Button>
      </Grid>
    </Paper>
  );
};

export default TotalScore;
