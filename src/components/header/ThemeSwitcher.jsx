import { Switch } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Context'

export const ThemeSwitcher = () => {
    const {mode, switchThemeMode} = useContext(ThemeContext)
    // console.log(switchThemeMode, mode);
    
    
  return (
    <>
    <Switch onChange={switchThemeMode}/>
    </>
  )
}
