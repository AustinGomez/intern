import React, { useState } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "../Home";

import "./App.css";

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
            setSelectedCompany={setSelectedCompany}
          ></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
