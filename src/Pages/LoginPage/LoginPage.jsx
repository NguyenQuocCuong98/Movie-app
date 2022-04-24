import Header from "../../components/Layout/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import React from "react";
import classes from "./../LoginPage/LoginPage.module.css";
const LoginPage = () => {
  return (
    <>
      <Header />
      <div className={classes["form-login"]}>
        <h1>Login</h1>
        <div className={classes["form-input"]}>
          <div className={classes["form-list"]}>
            <input type="text" placeholder="Phone" />
            <input type="password" placeholder="Password" />
            <div className={classes["form-btn"]}>
              <button>Login</button>
            </div>
          </div>
          <div className={classes["form-forgot"]}>
            <p>Forgot password</p>
            <div className={classes["form-or"]}>
              <p>or</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
