import React from "react";
import { Container, ThemeProvider, Typography } from "@mui/material";
import Game from "./components/game";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Container>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="success.dark"
            gutterBottom
            mt={4}
            mb={2}
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3.5rem",
                xl: "4rem",
              },
            }}
          >
            Rock Paper Scissors
          </Typography>
          <Game />
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
