import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import Modal from "../../UI/Modal";
import classes from "../../Layout/NavRight/NavRight.module.css";

const NavRight = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={classes["nav-right"]}>
      <SearchIcon className={classes.icon} />
      <button>Buy Package</button>
      <Link to={"/login"} style={{ textDecoration: "none" }}>
        {" "}
        <p>Login</p>
      </Link>
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
