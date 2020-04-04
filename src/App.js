import React, { useState, useRef } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { theme } from "./theme";
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu/Menu";
import FocusLock from "react-focus-lock";
import logo from "./images/logo.png";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
     
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} setOpen={open} />}
          />
          <Route path="/about" component={About} />
        </Switch>
       
    </ThemeProvider>
  );
}

export default App;
