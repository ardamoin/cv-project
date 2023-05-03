import React from "react";

import classes from "./CVHeader.module.css";

import fbIcon from "../../Assets/fb-icon.svg";
import zuck from "../../Assets/zuck.png";
import loupe from "../../Assets/loupe.svg";

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
      <img
        alt="profile pic"
        src={zuck}
        className={classes["profile-pic"]}
      ></img>
      <span className={classes.name}>Name</span>
    </div>
  );
};

export default CVHeader;
