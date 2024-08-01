import { Grid } from "@mui/material";
import { ChoicesProps } from "./types";
import { ChoicesEnum } from "../../types";
import { ChoiseButton } from "./choice-button/styled";

const Choices: React.FC<ChoicesProps> = ({ onUserChoice }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {Object.values(ChoicesEnum).map((choice, index) => (
        <Grid item key={index}>
          <ChoiseButton
            variant="contained"
            onClick={() => onUserChoice(choice)}
          >
            {choice}
          </ChoiseButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default Choices;
