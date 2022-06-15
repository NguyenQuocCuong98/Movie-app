import Form from "../UI/Form-Info/Form";
import React from "react";
import classes from "../FormInfo/FormInfo.module.css";
const FormInfo = () => {
  return (
    <>
      <Form>
        <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-user"></i>
          <div className={classes["form-list"]}>
            <h5>Account</h5>
            <span className={classes.text}>0964562535</span>
          </div>
        </div>
      </Form>
      <Form>
        <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-clipboard-user"></i>
          <div className={classes["form-list"]}>
            <h5>ID</h5>
            <span className={classes.text}>0964562535</span>
          </div>
        </div>
      </Form>
      <Form>
        <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-envelope"></i>
          <div className={classes["form-list"]}>
            <h5>Email</h5>
            <span className={classes.text}>0964562535</span>
          </div>
        </div>
      </Form>
      <Form>
        <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-calendar-check"></i>
          <div className={classes["form-list"]}>
            <h5>Date of birth</h5>
            <span className={classes.text}>0964562535</span>
          </div>
        </div>
      </Form>
      <Form>
        <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-user-gear"></i>
          <div className={classes["form-list"]}>
            <h5>Sex</h5>
            <span className={classes.text}>0964562535</span>
          </div>
        </div>
      </Form>
      <Form>
        <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-location-dot"></i>
          <div className={classes["form-list"]}>
            <h5>Location</h5>
            <span className={classes.text}>0964562535</span>
          </div>
        </div>
      </Form>
      <Form>
        <div className={classes["form-wrapper"]}>
          <i className="fa-solid fa-lock"></i>
          <div className={classes["form-list"]}>
            <h5>Password</h5>
            <span className={classes.text}>0964562535</span>
          </div>
        </div>
      </Form>
    </>
  );
};

export default FormInfo;
