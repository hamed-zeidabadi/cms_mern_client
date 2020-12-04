import React from "react";
import "./Scss/App.scss";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./Pages/Home";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
