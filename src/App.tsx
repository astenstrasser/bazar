import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GApiProvider } from "react-gapi-auth2";
import Header from "./shared-components/header/Header";
import Shelf from "./pages/shelf/Shelf";
import Details from "./pages/details/Details";
import Form from "./pages/form/Form";
import { createNewProduct } from "./api/api";

const App: React.FC = () => {
  const clientConfig = {
    client_id: process.env.REACT_APP_CLIENT_ID || "",
  };

  return (
    <GApiProvider clientConfig={clientConfig}>
      <Router>
        <Header />

        <Switch>
          <Route path="/new-product">
            <Form
              handleSubmit={(formFields) => {
                try {
                  const createdProduct = createNewProduct(
                    formFields.name,
                    formFields.price,
                    formFields.description,
                    formFields.picture,
                    formFields.pictureAltText
                  );
                  console.log("CREATED PROD", createdProduct);
                } catch (err) {
                  console.log(err);
                }
              }}
            />
          </Route>
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
