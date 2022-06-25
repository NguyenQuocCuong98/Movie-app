import Form from "../UI/Form-Info/Form";
import React from "react";
import classes from "../FormInfo/FormInfo.module.css";
import { selectUser } from "../../Redux/user-slice";
import { useSelector } from "react-redux";
const FormInfo = () => {
 const user = useSelector(selectUser)
  return (
    <>
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
          <i className="fa-solid fa-clipboard-user"></i>
          <div className={classes["form-list"]}>
            <h5>ID</h5>
            <span className={classes.text}>{user?.uid}</span>
          </div>
        </div>
      </Form>
      <Form>
        <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-envelope"></i>
          <div className={classes["form-list"]}>
            <h5>Email</h5>
            <span className={classes.text}>{user?.email}</span>
          </div>
        </div>
      </Form>
      <Form>
        <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-calendar-check"></i>
          <div className={classes["form-list"]}>
            <h5>Date of birth</h5>
            <span className={classes.text}>11/01/1998</span>
          </div>
        </div>
      </Form>
      <Form>
        <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-user-gear"></i>
          <div className={classes["form-list"]}>
            <h5>Sex</h5>
            <span className={classes.text}>Nam</span>
          </div>
        </div>
      </Form>
      <Form>
        <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-location-dot"></i>
          <div className={classes["form-list"]}>
            <h5>Location</h5>
            <span className={classes.text}>TP.HCM</span>
          </div>
        </div>
      </Form>
      <Form>
        <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-lock"></i>
          <div className={classes["form-list"]}>
            <h5>Password</h5>
            <span className={classes.text}>***********</span>
          </div>
        </div>
      </Form>
    </>
  );
};

export default FormInfo;
