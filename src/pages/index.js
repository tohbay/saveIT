import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './LandingPage';
import SignupPage from "./SignupPage";


function App() {
  return (
    <div>
    <Router>  
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;