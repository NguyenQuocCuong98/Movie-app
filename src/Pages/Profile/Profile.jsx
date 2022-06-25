import ProfileContent from "../../components/ProfileContent/ProfileContent";
import React from "react";
import SizeBarProfile from "../../components/SizeBarProfile/SizeBarProfile";
import classes from "../Profile/Profile.module.css";
const Profile = () => {
  return (
    <div className={classes["container-profile"]}>
      <SizeBarProfile />
      <ProfileContent />
    </div>
  );
};

export default Profile;
