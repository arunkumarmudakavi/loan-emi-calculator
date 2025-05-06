import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    background: {
      default: "rgb(8, 183, 242)",
      paper: "rgb(255, 255, 255)",
    },
    primary: {
       main:  "rgb(79, 79, 79)"
    }
  },
});

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "rgb(33, 37, 39)",
      paper: "rgb(41, 44, 49)",
    },
    primary: {
        main:  "rgb(255, 255, 255)"
     }
  },
});
