import React from "react";
import classes from "../../Layout/NavMenu/MainMenu.module.css";
import logoHBO from "../../../assets/logohbo.jpg";

const MainMenu = () => {
  return (
    <div className={classes["nav-menu"]}>
      <img src={logoHBO} alt="logo" />
      <div className={classes.peseudo} />
      <ul>
        <li>Movie</li>
        <li>Film</li>
        <li>Asia</li>
        <li>Documents</li>
        <li>Children & Families</li>
      </ul>
    </div>
  );
};

export default MainMenu;
