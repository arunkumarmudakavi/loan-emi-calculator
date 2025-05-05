import { useState } from "react"
import { ThemeContext } from "./themeContext"

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState();
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
