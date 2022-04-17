import { Link } from "react-router-dom";
import MainMenu from "../NavMenu/MainMenu";
import NavRight from "../NavRight/NavRight";
import React from "react";
import classes from "../../Layout/Header/Header.module.css";
import logo from "../../../assets/logo-2.png";

const Header = () => {
  return (
    <header className={classes.header}>
      {/* Logo */}
      <div className={classes.img}>
        <Link to="/">
          <img src={logo} alt="Logo FPT" />
        </Link>
      </div>
      {/* Nav menu*/}
      <MainMenu />
      <NavRight />
    </header>
  );
};

export default Header;
