import { Box, Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box sx={{height: "95dvh", display: "flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <Typography variant="h4" sx={{color: theme.palette.primary.main ,mb:2 }}>Something Went Wrong!!!</Typography>
      <Button variant="outlined" onClick={() => navigate("/")}>
        GO HOME
      </Button>
    </Box>
  );
};

export { Error };
