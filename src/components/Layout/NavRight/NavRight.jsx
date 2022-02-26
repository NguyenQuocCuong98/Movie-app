import React, { useState } from "react";
import classes from "../../Layout/NavRight/NavRight.module.css";
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import Modal from "../../UI/Modal";
const NavRight = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={classes["nav-right"]}>
      <SearchIcon className={classes.icon} />
      <button>Mua Gói</button>
      <p>Đăng nhập</p>
      <MenuIcon className={classes.menu} onClick={() => setShowMenu(true)} />
      {showMenu && (
        <Modal onClose={() => setShowMenu(false)}>
          <div className={classes.container}>
            <li>
              <a>Trang chủ</a>
            </li>
            <li>
              <a>Phim bộ</a>
            </li>
            <li>
              <a>Điện ảnh</a>
            </li>
            <li>
              <a>Châu Á</a>
            </li>
            <li>
              <a>Tài liệu</a>
            </li>
            <li>
              <a>Thiếu nhi & Gia đình</a>
            </li>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NavRight;
