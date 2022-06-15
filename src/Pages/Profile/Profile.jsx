import ProfileContent from "../../components/ProfileContent/ProfileContent";
import React from "react";
import SizeBar from "../../components/SizeBar/SizeBar";
import classes from "../Profile/Profile.module.css";
const Profile = () => {
  return (
    <div className={classes["container-profile"]}>
      <SizeBar />
      <ProfileContent />
    </div>
  );
};

export default Profile;
