import React from "react";
<<<<<<< HEAD

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <>
      <input
        style={{ width: "100%" }}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
=======
import classes from "./../Input/Input.module.css";

const Input = ({ type, placeholder }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} />
>>>>>>> origin/master
    </>
  );
};

export default Input;
