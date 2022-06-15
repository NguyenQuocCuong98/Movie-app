import React from "react";
import classes from "../SizeBar/SizeBar.module.css";
const SizeBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.active}>
            <i className="fa-solid fa-user"></i>
          </div>
          <i className="fa-solid fa-trophy"></i>
          <i className="fa-solid fa-laptop"></i>
          <i className="fa-solid fa-credit-card"></i>
          <i className="fa-solid fa-book"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-clock"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-qrcode"></i>
          <i className="fa-solid fa-right-from-bracket"></i>
        </div>
        <div className={classes.text}>
          <div className={classes["text-active"]}>
            <p>Personal information</p>
          </div>
          <p>FPT Play Reward</p>
          <p>Equipment management</p>
          <p>Payment card management</p>
          <p>Transaction history</p>
          <p>Service purchased</p>
          <p>Watching</p>
          <p>Favorite</p>
          <p>Activation code</p>
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default SizeBar;
