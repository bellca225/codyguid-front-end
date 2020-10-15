/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import Reducer from "./_reducers";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// core components
import Admin from "layouts/Admin.js";

import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";
import rootReducer from "./_reducers";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#9E38B4" },
  },
  contrastText: "#fff",
});

const hist = createBrowserHistory();

const logger = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/rtl" component={RTL} />
          {/* 여기 주석처리해야 나옴 */}
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
