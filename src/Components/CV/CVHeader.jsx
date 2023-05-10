import React from "react";

import classes from "./CVHeader.module.css";

import fbIcon from "../../Assets/fb-icon.svg";
import loupe from "../../Assets/loupe.svg";
import ProfilePicSelector from "../UI/ProfilePicSelector";

const CVHeader = () => {
  return (
    <div className={classes["cv-header"]}>
      <img alt="fb logo" src={fbIcon} className={classes["fb-icon"]} />
      <span className={classes["job-title"]}>
        <img src={loupe} alt="loupe" />
        <span
          className={classes["title-span"]}
          type="text"
          placeholder="Job Title"
          role="textbox"
          contentEditable
        />
      </span>
      <span className={classes["profile-pic"]}>
        <ProfilePicSelector height="47px" width="47px" />
      </span>
      <span className={classes.name}>Name</span>
    </div>
  );
};

export default CVHeader;
