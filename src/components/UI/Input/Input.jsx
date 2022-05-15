import React from "react";
import classes from "./../Input/Input.module.css";

const Input = ({ type, placeholder, onChange, value, onBlur }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
    </>
  );
};

export default Input;
