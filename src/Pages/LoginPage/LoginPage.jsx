import React, { useState } from "react";

import Button from "../../components/UI/Button/Button";
import Header from "../../components/Layout/Header/Header";
import Input from "../../components/UI/Input/Input";
import LoginForm from "../../components/LoginForm/LoginForm";
import classes from "./../LoginPage/LoginPage.module.css";
import useInput from "../../useHooks/useInput";

const LoginPage = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHasError,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmailTouched, setEnterEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched;
  let formIsvalid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsvalid = true;
  }
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const emailInputBlurHandler = (event) => {
    setEnterEmailTouched(true);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);

    resetNameInput();
    setEnteredEmail("");
    setEnterEmailTouched(false);
  };
  const emailInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const passwordInputClasses = enteredEmailIsValid
    ? "form-control"
    : "form-control";
  return (
    <>
      <Header />
      <div className={classes["form-login"]}>
        <h1>Login</h1>
        <form
          onSubmit={formSubmissionHandler}
          className={classes["form-control"]}
        >
          <div className={emailInputClasses}>
            <Input
              type="text"
              placeholder="Email"
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
              value={enteredEmail}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={passwordInputChangeHandler}
              value={enteredPassword}
            />
            <div className={classes["form-btn"]}>
              <Button className={classes["btn-login"]}>Login</Button>
            </div>
          </div>
          <div className={classes["form-forgot"]}>
            <span className={classes.forgot}>Forgot password</span>
            <div className={classes["form-or"]}>
              <span className={classes.or}>or</span>
            </div>
          </div>
          <div className={classes["btn-internet"]}>
            <Button className={classes["btn-facebook"]}>FaceBook</Button>
            <Button className={classes["btn-google"]}>Google</Button>
          </div>
          <div className={classes["form-register"]}>
            <span className={classes.account}>No account?</span>
            <span className={classes.register}>Register now</span>
          </div>
          <div className={classes["form-rules"]}>
            <span className={classes.rules}>Policies and regulations</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
