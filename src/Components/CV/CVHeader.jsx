import React, { useState } from "react";

import classes from "./CVHeader.module.css";

import fbIcon from "../../Assets/fb-icon.svg";
import zuck from "../../Assets/zuck.png";
import loupe from "../../Assets/loupe.svg";

const CVHeader = () => {
  const [focused, setFocused] = useState(false);

  const setToFocused = () => {
    setFocused(true);
  };

  const setToUnfocused = () => {
    setFocused(false);
  };

  return (
    <div className={classes["cv-header"]}>
      <img alt="fb logo" src={fbIcon} className={classes["fb-icon"]} />
      <span className={`${classes["job-title"]} ${focused && classes.focus}`}>
        <img src={loupe} alt="loupe" />
        <input
          type="text"
          placeholder="Job Title"
          onFocus={setToFocused}
          onBlur={setToUnfocused}
        ></input>
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
