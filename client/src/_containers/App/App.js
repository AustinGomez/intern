import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "_containers/Navbar";
import Home from "_containers/Home";
import "./App.css";
import EmailConfirmed from "_containers/EmailConfirmed";

const App = () => {
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
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/confirmed" component={EmailConfirmed} />
          </Switch>
        </>
      </Router>
    </>
  );
};

export default App;
