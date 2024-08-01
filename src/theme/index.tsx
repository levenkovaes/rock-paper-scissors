import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EFE6CD",
      light: "#F9F4E6",
      dark: "#D1C3A5",
    },
    secondary: {
      main: "#CED6F0",
      light: "#E1E6F9",
      dark: "#A1A9C2",
    },
    success: {
      main: "#007172",
      light: "#33A6A6",
      dark: "#004C4C",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#F29325",
      light: "#F8B060",
      dark: "#B76E1A",
    },
    error: {
      main: "#D94F04",
      light: "#E97F3A",
      dark: "#A13703",
    },
  },
});

export default theme;
