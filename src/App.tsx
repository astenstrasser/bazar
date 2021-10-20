import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import Header from "./shared-components/header/Header";
import Shelf from "./pages/shelf/Shelf";
import Details from "./pages/details/Details";
import Form from "./pages/form/Form";
import { createNewProduct } from "./api/api";
import GoogleAuthentication from "./shared-components/google-authentication/GoogleAuthentication";

export interface AuthData {
  isLoggedIn: boolean;
  user?: unknown;
}

export const AuthContext = React.createContext({} as AuthData);

const App: React.FC = () => {
  const [authData, setAuthData] = useState<AuthData>({ isLoggedIn: false });

  const onLoginSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ("getBasicProfile" in response) {
      setAuthData({ isLoggedIn: true, user: response.getBasicProfile() });
    }
  };
  const onLogoutSuccess = () => {
    setAuthData({ isLoggedIn: false, user: {} });
  };

  return (
    <AuthContext.Provider value={authData}>
      <Router>
        <Header />
        <GoogleAuthentication
          onLoginSuccess={onLoginSuccess}
          onLogoutSuccess={onLogoutSuccess}
        />

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
    </AuthContext.Provider>
  );
};

export default App;
