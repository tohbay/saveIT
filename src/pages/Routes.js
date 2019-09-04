import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notifications from 'react-notify-toast'
import LandingPage from "./LandingPage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import ClientPage from "./ClientPage";
import HistoryPage from '../components/History/HistoryPage';
import AccountProfile from '../components/AccountProfile/AccountProfile';
import NotFound from './NotFound/index';



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
          <Route exact path="/profile" component={AccountProfile} />
          <Route exact path="/history" component={HistoryPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
