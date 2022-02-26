import React from "react";
import classes from "../../Layout/NavMenu/MainMenu.module.css";
import logoHBO from "../../../assets/logohbo.jpg";
const MainMenu = () => {
  return (
    <div className={classes["nav-menu"]}>
      <img src={logoHBO} alt="logo" />
      <div className={classes.peseudo} />
      <ul>
        <li>Phim bộ </li>
        <li>Điện ảnh</li>
        <li>Châu Á</li>
        <li>Tài liệu</li>
        <li>Thiếu nhi & Gia đình</li>
      </ul>
    </div>
  );
};

export default MainMenu;
