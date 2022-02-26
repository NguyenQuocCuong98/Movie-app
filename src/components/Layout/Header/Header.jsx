import React, { useEffect } from "react";

import MainMenu from "../NavMenu/MainMenu";
import NavRight from "../NavRight/NavRight";
import classes from "../../Layout/Header/Header.module.css";
import logo from "../../../assets/logo-2.png";

const Header = () => {
  return (
    <header className={classes.header}>
      {/* Logo */}
      <div className={classes.img}>
        <img src={logo} alt="Logo FPT" />
      </div>
      {/* Nav menu*/}
      <MainMenu />
      <NavRight />
    </header>
  );
};

export default Header;
