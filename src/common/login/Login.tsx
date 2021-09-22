import React from "react";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
  ? process.env.REACT_APP_CLIENT_ID
  : "";

function Login(): React.ReactElement {
  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log("login success", res);
  };
  const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log("login Failed", res);
  };
  return (
    <div className="google-login">
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}

export default Login;
