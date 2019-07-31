import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollToTop from "_components/RouterScrollToTop";
import { ToastContainer } from "react-toastify";

import Navbar from "_containers/Navbar";
import Home from "_containers/Home";
import Login from "_containers/Login";
import Company from "_containers/Company";
import Footer from "_components/Footer";
import EmailConfirmed from "_containers/EmailConfirmed";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="og:title" content={`InternBeat | Internship Reviews`} />
        <meta
          name="og:description"
          content="Search internships and find the best companies to work for. See intern salaries, reviews, and more."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>InternBeat | Internship Reviews</title>
        <script src="https://kit.fontawesome.com/1e848a86f3.js" />
      </Helmet>

      <Router>
        <ScrollToTop>
          <div className="app">
            <Navbar />
            <div className="app-content is-fullheight">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/companies/:slug" component={Company} />
                <Route exact path="/confirmed" component={EmailConfirmed} />
              </Switch>
            </div>
          </div>
          <Footer />
        </ScrollToTop>
        <ToastContainer
          hideProgressBar={true}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          closeOnClick={true}
        />
      </Router>
    </>
  );
};

export default App;
