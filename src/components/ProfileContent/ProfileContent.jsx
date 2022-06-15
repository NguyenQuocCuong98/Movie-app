import FormInfo from "../FormInfo/FormInfo";
import React from "react";
import classes from "../ProfileContent/ProfileContent.module.css";
const ProfileContent = () => {
  return (
    <div className={classes["container-infor"]}>
      <div className={classes.wrapper}>
        <div className={classes.infor}>
          <img
            src="https://static.fptplay.net/static/img/share/structure/08_05_2015/default_user_icon08-05-2015_16g50-27.jpg?w=258&mode=scale&fmt=webp"
            alt="avatar"
            className={classes["infor-avatar"]}
          />
          <div className={classes["infor-detail"]}>
            <h5 className={classes["infor-detail__email"]}>0964562535</h5>
            <div className={classes["infor-detail__list"]}>
              <p className={classes["infor-detail__point"]}>0 Point</p>
              <div className={classes.block} />
              <p className={classes["infor-detail__rank"]}>Bronze 5</p>
            </div>
          </div>
        </div>
      </div>
      <button className={classes["btn-infor"]}>
        <i className="fa-solid fa-pencil"></i>
        <p>edit information</p>
      </button>
      <div className={classes["form-info"]}>
        <FormInfo />
      </div>
    </div>
  );
};

export default ProfileContent;
