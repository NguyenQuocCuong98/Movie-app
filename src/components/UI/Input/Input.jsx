import React from "react";

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
    </>
  );
};

export default Input;
