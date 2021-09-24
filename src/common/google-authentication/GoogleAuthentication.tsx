import React from "react";
import { useGoogleAuth } from "react-gapi-auth2";
import LoginIcon from "../../assets/login-icon.svg";
import LogoutIcon from "../../assets/logout-icon.svg";
import "./GoogleAuthentication.css";

function GoogleAuthentication(): React.ReactElement {
  const { googleAuth } = useGoogleAuth();

  const handleSignOut = () => {
    googleAuth?.signOut();
    alert("Deslogado com sucesso!");
  };

  return (
    <div className="google-login">
      {googleAuth?.isSignedIn.get() == false && (
        <a onClick={() => googleAuth?.signIn()}>
          <img
            className="action-icon"
            src={LoginIcon}
            alt="Ícone para logar na aplicação"
          />
        </a>
      )}

      {googleAuth?.isSignedIn.get() && (
        <a onClick={handleSignOut}>
          <img
            className="action-icon"
            src={LogoutIcon}
            alt="Ícone para deslogar da aplicação"
          />
        </a>
      )}
    </div>
  );
}

export default GoogleAuthentication;
