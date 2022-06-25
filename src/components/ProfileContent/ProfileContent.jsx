import Form from "../UI/Form-Info/Form";
import FormInfo from "../FormInfo/FormInfo";
import React from "react";
import classes from "../ProfileContent/ProfileContent.module.css";
import { selectUser } from "../../Redux/user-slice";
import { useSelector } from "react-redux";
const ProfileContent = () => {
  const user = useSelector(selectUser)
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
            <h5 className={classes["infor-detail__email"]}>{user?.displayName}</h5>
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
     <div className={classes['form-info__wrapper']}>
     <Form>
      <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-user"></i>
          <div className={classes["form-list"]}>
            <h5>Account</h5>
            <span className={classes.text}>{user?.displayName}</span>
          </div>
        </div>
      </Form>
      <Form>
      <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-user"></i>
          <div className={classes["form-list"]}>
            <h5>Account</h5>
            <span className={classes.text}>{user?.displayName}</span>
          </div>
        </div>
      </Form>
      <Form>
      <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-user"></i>
          <div className={classes["form-list"]}>
            <h5>Account</h5>
            <span className={classes.text}>{user?.displayName}</span>
          </div>
        </div>
      </Form>
      <Form>
      <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-user"></i>
          <div className={classes["form-list"]}>
            <h5>Account</h5>
            <span className={classes.text}>{user?.displayName}</span>
          </div>
        </div>
      </Form>
     </div>
     <div className={classes["form-info__right"]}>
     <Form>
      <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-user"></i>
          <div className={classes["form-list"]}>
            <h5>Account</h5>
            <span className={classes.text}>{user?.displayName}</span>
          </div>
        </div>
      </Form><Form>
      <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-user"></i>
          <div className={classes["form-list"]}>
            <h5>Account</h5>
            <span className={classes.text}>{user?.displayName}</span>
          </div>
        </div>
      </Form><Form>
      <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-user"></i>
          <div className={classes["form-list"]}>
            <h5>Account</h5>
            <span className={classes.text}>{user?.displayName}</span>
          </div>
        </div>
      </Form>
     </div>
      </div>
    </div>
  );
};

export default ProfileContent;
