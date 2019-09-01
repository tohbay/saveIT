import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import ClientPage from "./ClientPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/client" component={ClientPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
