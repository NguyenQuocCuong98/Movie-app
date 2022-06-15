import React, { useState } from "react";

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import classes from "../Register/Register.module.css";
import { register } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const navigate = useNavigate();
  const emailInputChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmissionHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      if (email === "" && password === "") {
        setEmailIsValid(true);
        setPasswordIsValid(true);
        return;
      }
      setEmailIsValid(false);
      setPasswordIsValid(false);
      await register(email, password);
      navigate("/login");
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className={classes["form-login"]}>
        <h1>Register an account</h1>
        <form className={classes["form-control"]}>
          <div>
            <Input
              type="text"
              placeholder="Email"
              onChange={emailInputChangeHandler}
              value={email}
            />
            {emailIsValid && (
              <p className={classes.error}>Email must not be empty</p>
            )}
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              onChange={passwordInputChangeHandler}
              value={password}
            />
            {passwordIsValid && (
              <p className={classes.error}>Password must not be empty</p>
            )}
          </div>
          <div className={classes["form-forgot"]}>
            <span className={classes.forgot}>
              When you click the subscribe button
            </span>
            <p className={classes.policies}>Policies and regulations</p>
            <div className={classes["form-btn"]}>
              <Button
                onClick={onSubmissionHandler}
                type="submit"
                className={classes["btn-login"]}
              >
                Register
              </Button>
            </div>
            <div className={classes["form-or"]}>
              <span className={classes.or}>or</span>
            </div>
          </div>
          <div className={classes["btn-internet"]}>
            <Button type="button" className={classes["btn-facebook"]}>
              FaceBook
            </Button>
            <Button type="button" className={classes["btn-google"]}>
              Google
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
