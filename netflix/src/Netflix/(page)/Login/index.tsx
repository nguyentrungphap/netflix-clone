import React from "react";
import { Link } from "react-router-dom";
import Style from "./style.module.scss";
type Props = {};

const Login = (props: Props) => {
  return (
    <div className={Style.login}>
      <div className={Style.loginContainer}>
        <h2>Sign In</h2>
        <input
          className={Style.userAccount}
          type="text"
          placeholder="Email or phone number"
        />
        <input
          className={Style.userAccount}
          type="password"
          placeholder="Password"
        />
        <button className={Style.buttonSignIn}>Sign In</button>
        <Link className={Style.forgot} to="/login">
          Forgot password?
        </Link>
        <div className={Style.rememberMe}>
          <input type="checkbox" />
          <label>&nbsp;Remember me</label>
        </div>
        <span className={Style.signUp}>
          New to Netflix ? &nbsp;
          <Link className={Style.link} to="/login">
            Sign up now.
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
