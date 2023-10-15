import { useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/HomePage"
import LoginPage from "scenes/LoginPage"
import ProfilePage from "scenes/ProfilePage"
import  {useMemo} from "react";
import { UseSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import  {createTheme} from "@mui/material/styles";
import {themeSettings} from "./theme"

function App() {
  const mode = useState(state => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
     <BrowserRouter>
     <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Routes>
        <Routes path="/" element= {<LoginPage/>}/>
        <Routes path="/home" element= {<HomePage/>}/>
        <Routes path="/profile/:userId" element= {<ProfilePage/>}/>
      </Routes>
     </ThemeProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
