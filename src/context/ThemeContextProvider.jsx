import { useEffect, useState } from "react";
import { ThemeContext } from "./Context";
import { DarkTheme, LightTheme } from "./Theme";
import { ThemeProvider } from "@mui/material";

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(LightTheme);
  const [theme, setTheme] = useState(LightTheme);

  useEffect(() => {
    switch (mode) {
      case "light":
        setTheme(LightTheme);
        break;
      case "dark":
        setTheme(DarkTheme);
        break;
      default:
        setTheme(LightTheme);
        break;
    }
  }, [mode]);

  const switchThemeMode = () => {
    // setMode(mode);
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  };

  return (
    <ThemeContext.Provider value={{ mode, switchThemeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
