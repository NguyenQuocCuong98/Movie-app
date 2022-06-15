import React from "react";
import classes from "../Form-Info/Form.module.css";
const Form = ({ children }) => {
  return <div className={classes.form}>{children}</div>;
};

export default Form;
