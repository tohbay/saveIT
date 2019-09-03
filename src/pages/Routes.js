import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notifications from 'react-notify-toast'
import LandingPage from "./LandingPage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import ClientPage from "./ClientPage";

function Routes() {
  return (
    <div>
    <Notifications />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/client" component={ClientPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
