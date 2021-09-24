import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GApiProvider } from "react-gapi-auth2";
import Header from "./common/header/Header";
import Shelf from "./shelf/Shelf";
import Details from "./details/Details";

const App: React.FC = () => {
  const clientConfig = {
    client_id: process.env.REACT_APP_CLIENT_ID || "",
  };

  return (
    <GApiProvider clientConfig={clientConfig}>
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
    </GApiProvider>
  );
};

export default App;
