import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollToTop from "_components/RouterScrollToTop";
import Footer from "_components/Footer";
import Navbar from "_containers/Navbar";
import Home from "_containers/Home";
import Company from "_containers/Company";

import "./App.css";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="og:description"
          content="Search internships and find the best companies to work for. See intern salaries, reviews, and more."
        />
        <meta name="og:title" content={` ${company.name} Internship Reviews`} />
        <meta
          name="pg:description"
          content="Search internships and find the best companies to work for. See intern salaries, reviews, and more."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>InternBeat | Internship Reviews</title>
      </Helmet>

      <Router>
        <ScrollToTop>
          <div className="app">
            <Navbar />
            <div className="app-content is-fullheight">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/companies/:slug" component={Company} />
              </Switch>
            </div>
          </div>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
};

export default App;
