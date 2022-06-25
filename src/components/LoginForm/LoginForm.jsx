import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  auth,
  facebookProvider,
  googleProvider,
  login,
} from "../../firebase/firebase";

import Button from "../../components/UI/Button/Button";
import Header from "../../components/Layout/Header/Header";
import Input from "../../components/UI/Input/Input";
import { addUser } from "../../actions/storeActions";
import classes from "../LoginForm/LoginForm.module.css"
import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";

const LoginForm = () => {
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
      navigate('/')
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
        <div className={classes["form-control"]}>
          <div className={classes["form-input"]}>
             <div className={classes["form-list"]}>
              <Input
                type="text"
                placeholder="Login"
                onChange={emailInputChangeHandler}
                value={email}
              />
              <Input
                onChange={passwordInputChangeHandler}
                value={password}
                type="password"
                placeholder="Password"
              />
              <div className={classes["form-btn"]}>
                <Button onClick={signInHandler} type="submit" className={classes["form-btn"]}>
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
              <Button onClick={() => handlerSignIn(facebookProvider)} type="button" className={classes["btn-facebook"]}>
                Facebook
              </Button>
              <Button onClick={() => handlerSignIn(googleProvider)} type="button" className={classes["btn-google"]}>
                Google
              </Button>
            </div>
            <div className={classes["form-register"]}>
              <div className={classes.register}>
                <p>Not have account?</p>
               <Link style={{textDecoration:'none'}} to="/register">
               <span className={classes["register-text"]}>Register now</span></Link>
              </div>
              <div className={classes.policy}>
                <span className={classes["policy-text"]}>
                  Policies and regulations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
