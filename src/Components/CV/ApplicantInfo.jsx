import React from "react";

import Card from "../UI/Card";
import location from "../../Assets/location.svg";
import phone from "../../Assets/phone.svg";
import email from "../../Assets/email.svg";

import classes from "./ApplicantInfo.module.css";
import ProfilePicSelector from "../UI/ProfilePicSelector";

const ApplicantInfo = (props) => {
  return (
    <Card>
      <span className={classes.fullname}>
        <ProfilePicSelector height="84px" width="84px" />
        <span className={classes["name-wrapper"]}>
          <span
            className={classes.name}
            contentEditable
            role="textbox"
            onInput={props.onUserNameChange}
          />
        </span>
      </span>
      <hr className={classes.hr} />
      <div className={classes["info-wrapper"]}>
        <span className={classes.detail}>
          <img
            src={location}
            alt="location icon"
            className={classes.location}
          />
          <span
            className={classes["info-location"]}
            contentEditable
            role="textbox"
          />
        </span>
        <span className={classes.detail}>
          <img src={phone} alt="phone icon" className={classes.phone} />
          <span
            className={classes["info-phone"]}
            contentEditable
            role="textbox"
          />
        </span>
        <span className={classes.detail}>
          <img src={email} alt="email icon" className={classes.email} />
          <span
            className={classes["info-email"]}
            contentEditable
            role="textbox"
          />
        </span>
      </div>
    </Card>
  );
};

export default ApplicantInfo;
