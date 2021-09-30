import React from "react";
import { useGoogleAuth } from "react-gapi-auth2";
import ActionIcon from "../action-icon/ActionIcon";
import { Icon } from "../types";

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
          type={Icon.Login}
          alt={"Ícone para logar na aplicação"}
        />
      )}

      {googleAuth?.isSignedIn.get() && (
        <ActionIcon
          onClick={handleSignOut}
          type={Icon.Logout}
          alt={"Ícone para deslogar da aplicação"}
        />
      )}
    </div>
  );
}

export default GoogleAuthentication;
