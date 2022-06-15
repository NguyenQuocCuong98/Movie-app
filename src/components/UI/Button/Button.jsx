import React from "react";

<<<<<<< HEAD
const Button = ({ children, className, type, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
=======
const Button = ({ children, className, type }) => {
  return (
    <button className={className} type={type}>
>>>>>>> origin/master
      {children}
    </button>
  );
};

export default Button;
