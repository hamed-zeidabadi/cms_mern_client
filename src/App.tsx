import React from "react";
import "./Scss/App.scss";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./Pages/Home";
import Post from "./Pages/Post";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/post/:id">
              <Post />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
