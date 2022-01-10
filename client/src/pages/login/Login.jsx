import React from "react";
import GoogleLogin from "react-google-login";
import "./Login.css";

const handleLogin = (googleData) => {
  console.log(googleData);
};

const handleFailure = (result) => {
  alert(result);
};

const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="google-login-button text-center">
          <div>
            <label htmlFor="username">Username</label>
            <input className="form-control"></input>
          </div>

          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login with google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
