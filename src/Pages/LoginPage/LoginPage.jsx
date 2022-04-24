import Button from "../../components/UI/Button/Button";
import Header from "../../components/Layout/Header/Header";
import Input from "../../components/UI/Input/Input";
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
            <Input type="text" placeholder="Login" />
            <Input type="password" placeholder="Password" />
            <div className={classes["form-btn"]}>
              <Button type="submit" className={classes["form-btn"]}>
                Login
              </Button>
            </div>
          </div>
          <div className={classes["form-forgot"]}>
            <p>Forgot password</p>
            <div className={classes["form-or"]}>
              <span className={classes["bg-dark"]}>or</span>
            </div>
          </div>
          <div className={classes["btn-list"]}>
            <Button type="button" className={classes["btn-facebook"]}>
              Facebook
            </Button>
            <Button type="button" className={classes["btn-google"]}>
              Google
            </Button>
          </div>
          <div className={classes["form-register"]}>
            <div className={classes.register}>
              <p>Not have account?</p>
              <span className={classes["register-text"]}>Register now</span>
            </div>
            <div className={classes.policy}>
              <span className={classes["policy-text"]}>
                Policies and regulations
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
