import React from "react";
import { useGoogleAuth } from "react-gapi-auth2";
import "./GoogleAuthentication.css";
import LoginIcon from "../../assets/login-icon.svg";
import LogoutIcon from "../../assets/logout-icon.svg";
import ActionIcon from "../action-icon/ActionIcon";

function GoogleAuthentication(): React.ReactElement {
  const { googleAuth } = useGoogleAuth();

  const handleSignOut = () => {
    googleAuth?.signOut();
    alert("Deslogado com sucesso!");
  };

  return (
    <div className="google-login">
      {googleAuth?.isSignedIn.get() == false && (
        <ActionIcon
          onClick={() => googleAuth?.signIn()}
          src={LoginIcon}
          alt={"Ícone para logar na aplicação"}
        />
      )}

      {googleAuth?.isSignedIn.get() && (
        <ActionIcon
          onClick={handleSignOut}
          src={LogoutIcon}
          alt={"Ícone para deslogar da aplicação"}
        />
      )}
    </div>
  );
}

export default GoogleAuthentication;
