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
            mt={6}
            mb={4}
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "4rem",
                xl: "5rem",
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
