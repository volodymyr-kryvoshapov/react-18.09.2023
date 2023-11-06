import React, {createContext} from "react";
import {Provider} from "react-redux";
import {TodoApp} from "./features/Todo";
import {store} from "./store";
import {ThemeProvider} from "./components/ThemeContext";
import {Home} from "./features/Home";
import {About} from "./features/About";
import {NotFound} from "./features/NotFound";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Navigation} from "./components/Navigation";
import {LanguageList} from './constants'
import {Language} from "./components/Language";
import Box from "@mui/material/Box";
import {LanguageProvider} from "./components/LanguageProvider";

export function App() {
  return (
    <Provider store={store}>
      <LanguageProvider initialLanguage={LanguageList.Ua}>
        <BrowserRouter>
          <ThemeProvider>
            <Container maxWidth="md">
              <Stack spacing={2}>
                <AppBar position="static">
                  <Toolbar>
                    <Navigation/>
                    <Box sx={{ flexGrow: 1 }}/>
                    <Language/>
                  </Toolbar>
                </AppBar>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/todo/*" element={<TodoApp/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="*" element={<NotFound/>}/>
                </Routes>
              </Stack>
            </Container>
          </ThemeProvider>
        </BrowserRouter>
      </LanguageProvider>
    </Provider>
  );
}
