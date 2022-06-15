import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  signInWithPopup,
} from "firebase/auth";
import {
  facebookProvider,
  googleProvider,
  login,
} from "../../firebase/firebase";

import Button from "../../components/UI/Button/Button";
import Header from "../../components/Layout/Header/Header";
import Input from "../../components/UI/Input/Input";
import { addUser } from "../../actions/storeActions";
import { auth } from "../../firebase/firebase";
import classes from "./../LoginPage/LoginPage.module.css";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const navigate = useNavigate();
  const emailInputChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const signInHandler = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      if (email === "" && password === "") {
        setEmailIsValid(true);
        setPasswordIsValid(true);
      }
      setEmailIsValid(false);
      setPasswordIsValid(false);
      await login(email, password);
      toast.success("Login Success");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
    setEmail("");
    setPassword("");
    setLoading(false);
  };

  const handlerSignIn = async (Provider) => {
    try {
      setLoading(true);
      const { _tokenResponse, user } = await signInWithPopup(auth, Provider);
      const { displayName, email, photoURL, uid } = user;
      if (_tokenResponse.isNewUser) {
        await addUser({ displayName, email, photoURL, uid });
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Header />
      <div className={classes["form-login"]}>
        <h1>Login</h1>
        <form className={classes["form-control"]}>
          <div>
            <Input
              type="text"
              placeholder="Email"
              onChange={emailInputChangeHandler}
              value={email}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={passwordInputChangeHandler}
              value={password}
            />
            <div className={classes["form-btn"]}>
              <Button
                onClick={signInHandler}
                type="submit"
                className={classes["btn-login"]}
              >
                Login
              </Button>
            </div>
          </div>
          <div className={classes["form-forgot"]}>
            <span className={classes.forgot}>Forgot password</span>
            <div className={classes["form-or"]}>
              <span className={classes.or}>or</span>
            </div>
          </div>
          <div className={classes["btn-internet"]}>
            <Button
              onClick={() => handlerSignIn(facebookProvider)}
              type="button"
              className={classes["btn-facebook"]}
            >
              FaceBook
            </Button>
            <Button type="button" className={classes["btn-google"]}>
              Google
            </Button>
          </div>
          <div className={classes["form-register"]}>
            <span className={classes.account}>No account?</span>
            <Link style={{ textDecoration: "none" }} to={"/register"}>
              <span className={classes.register}>Register now</span>
            </Link>
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
