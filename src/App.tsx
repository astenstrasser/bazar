import React from "react";
import Header from "./common/header/Header";
import Shelf from "./shelf/Shelf";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./details/Details";

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/:id">
          <Details />
        </Route>
        <Route path="/">
          <Shelf />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
