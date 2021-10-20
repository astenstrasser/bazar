import React, { useContext } from "react";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from "react-google-login";
import { AuthContext } from "../../App";

import "./GoogleAuthentication.css";

interface AuthProps {
  onLoginSuccess: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  onLogoutSuccess: () => void;
}

function GoogleAuthentication({
  onLoginSuccess,
  onLogoutSuccess,
}: AuthProps): React.ReactElement {
  const { isLoggedIn } = useContext(AuthContext);
  const client_id = process.env.REACT_APP_CLIENT_ID || "";

  const onFailure = () => {
    console.log("fail");
  };

  return (
    <div className="google-login">
      {!isLoggedIn && (
        <GoogleLogin
          clientId={client_id}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
      {isLoggedIn && (
        <GoogleLogout
          clientId={client_id}
          buttonText="Logout"
          onFailure={onFailure}
          onLogoutSuccess={onLogoutSuccess}
        />
      )}
    </div>
  );
}

export default GoogleAuthentication;
