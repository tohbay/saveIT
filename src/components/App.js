import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './LoginPage/LoginPage';
import SignupPage from './SignupPage/SignupPage';
import ClientPage from './ClientPage/ClientPage';
import AccountProfile from './AccountProfile/AccountProfile';
import HistoryPage from './History/HistoryPage';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Login" component={LoginPage} />
        <Route exact path="/Signup" component={SignupPage} />
        <Route exact path="/Client" component={ClientPage} />
        <Route exact path="/Profile" component={AccountProfile} />
        <Route exact path="/History" component={HistoryPage} />
      </Switch>
    </div>
  );
}

export default App;