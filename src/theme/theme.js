import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#006699",
    },
    secondary: {
      main: "#543884",
    },
    error: {
      main: red.A400,
    },
    details: {
      main: "#1a1a1a",
    },
  },
});
