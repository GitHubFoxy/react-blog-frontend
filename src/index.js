import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux"
import "./index.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import store from "./redux/store.js";
import { Fragment } from "react";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Fragment>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </Fragment>
);
