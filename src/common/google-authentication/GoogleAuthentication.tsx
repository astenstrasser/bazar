import React, { useState } from "react";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from "react-google-login";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
  ? process.env.REACT_APP_CLIENT_ID
  : "";

function GoogleAuthentication(): React.ReactElement {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    setIsLoggedIn(true);
    console.log("google-authentication success", res);
  };
  const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log("google-authentication Failed", res);
  };
  const logoutSuccess = () => {
    console.log("logout success");
    setIsLoggedIn(false);
    alert("Logout feito com sucesso");
  };
  return (
    <div className="google-login">
      {!isLoggedIn && (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      )}

      {isLoggedIn && (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={logoutSuccess}
        />
      )}
    </div>
  );
}

export default GoogleAuthentication;
