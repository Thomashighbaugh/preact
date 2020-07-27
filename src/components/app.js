import { h, Component } from "preact";
import { Router } from "preact-router";
import Helmet from "preact-helmet";
import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Profile from "../routes/profile";
import React from "react";
import What from "../routes/what";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
          <Helmet title="preact playground"
                  link={[
                      {rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"},
                  ]}
                  script={[
                      {src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js", type: "text/javascript"},
                      {src: "https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js", type: "text/javascript"},
                  ]}
          />
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile" />
          <Profile path="/profile/:user" />
          <What path="/what" />
        </Router>
      </div>
    );
  }
}
