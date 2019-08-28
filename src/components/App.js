import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;