import React from "react";
import classes from "../LoginForm/LoginForm.module.css";
const LoginForm = () => {
  return (
    <div className={classes["form-login"]}>
      <h1>Login</h1>
      <div className={classes["form-input"]}>
        <input type="text" placeholder="Phone" />
        <input type="password" placeholder="Password" />
        <div className={classes["form-btn"]}>
          <button type="submit"></button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
