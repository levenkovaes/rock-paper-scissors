import { Button, styled } from "@mui/material";

export const ChoiseButton = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "190px",
  height: "190px",
  borderRadius: "8px",
  boxShadow: theme.shadows[3],
  padding: "10px",
  margin: "10px",
  fontSize: "130px",
  transition: "all 0.3s ease",

  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "scale(1.05)",
  },

  "@media (max-width: 600px)": {
    width: "120px",
    height: "120px",
    fontSize: "80px",
  },

  "@media (min-width: 600px) and (max-width: 900px)": {
    width: "140px",
    height: "140px",
    fontSize: "90px",
  },

  "@media (min-width: 901px) and (max-width: 1200px)": {
    width: "160px",
    height: "160px",
    fontSize: "110px",
  },

  "@media (min-width: 1201px) and (max-width: 1536px)": {
    width: "180px",
    height: "180px",
    fontSize: "120px",
  },
}));
