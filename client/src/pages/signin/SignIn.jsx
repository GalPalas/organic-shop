import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import GoogleLogin from "react-google-login";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email(),
    password: yup.string().min(4, "must be at least 4 characters long"),
  })
  .required();

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch("/api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
  };
  //   const handleLogout = () => {
  //     localStorage.removeItem("loginData");
  //     setLoginData(null);
  //   };

  return (
    <div className="container p-5">
      <div className="row justify-content-center">
        <div className="col-8">
          <h2 className="mb-3">Sign In to O-Shop</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  className="form-control shadow-none"
                  placeholder="Enter email"
                  {...register("email")}
                />
              </div>

              {errors.email && (
                <div className="alert alert-danger p-1" role="alert">
                  {errors.email?.message}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa fa-key" aria-hidden="true"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  className="form-control shadow-none"
                  placeholder="Enter password"
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <div className="alert alert-danger p-1" role="alert">
                  {errors.password?.message}
                </div>
              )}
            </div>
            <div>
              <button className="btn btn-success w-100 my-3 shadow-none">
                Sign In
              </button>
            </div>
            <div>
              <p>
                Don't have an account?{" "}
                <Link to="/register">Create an account</Link>
              </p>
            </div>
            <hr className="dropdown-divider"></hr>
            <div className="text-center mt-3">
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={"single_host_origin"}
              ></GoogleLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
