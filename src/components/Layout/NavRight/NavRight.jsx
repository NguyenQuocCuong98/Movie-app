import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import Modal from "../../UI/Modal";
import classes from "../../Layout/NavRight/NavRight.module.css";
import { selectUser } from "../../../Redux/User-slice";
import { useSelector } from "react-redux";

const NavRight = () => {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector(selectUser);
  return (
    <div className={classes["nav-right"]}>
      <SearchIcon className={classes.icon} />
      <button>Buy Package</button>
      {!user ? (
        <Link to={"/profile"}>
          <img
            className={classes.avatar}
            src="https://static.fptplay.net/static/img/share/structure/08_05_2015/default_user_icon08-05-2015_16g50-27.jpg?w=50"
          />
        </Link>
      ) : (
        <Link to={"/login"}>
          <p>Login</p>
        </Link>
      )}
      <MenuIcon className={classes.menu} onClick={() => setShowMenu(true)} />
      {showMenu && (
        <Modal onClose={() => setShowMenu(false)}>
          <div className={classes.container}>
            <li>
              <a>Movie</a>
            </li>
            <li>
              <a>Film</a>
            </li>
            <li>
              <a>Asia</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>
              <a>Children & Families</a>
            </li>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NavRight;
