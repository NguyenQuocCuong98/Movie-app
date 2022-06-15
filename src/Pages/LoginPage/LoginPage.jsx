import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
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
import { signInWithPopup } from "firebase/auth";
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

  // const handlerSignIn = async (Provider) => {
  //   try {
  //     setLoading(true);
  //     const { _tokenResponse, user } = await signInWithPopup(auth, Provider);
  //     const { displayName, email, photoURL, uid } = user;
  //     if (_tokenResponse.isNewUser) {
  //       await addUser({ displayName, email, photoURL, uid });
  //     }
  //     setLoading(false);
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };
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
            <span className={classes.forgot}>Forgot password</span>
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
        </div>
      </div>
    </>
  );
};

export default LoginPage;
