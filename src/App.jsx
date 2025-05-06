import { Outlet } from "react-router-dom";
import { Header } from "./components/index.js";
import "./App.css";
import { Box, Paper, useTheme } from "@mui/material";

function App() {
  const theme = useTheme()
  return (
    <>
      <Header />
      <Box sx={{bgcolor: theme.palette.background.paper, minHeight: "95vh"}}>
        <Outlet />
      </Box>
      </>
  );
}

export default App;
