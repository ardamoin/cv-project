import React from "react";

import Card from "../UI/Card";
import zuck from "../../Assets/zuck.png";
import location from "../../Assets/location.svg";
import phone from "../../Assets/phone.svg";
import email from "../../Assets/email.svg";

import classes from "./ApplicantInfo.module.css";

const ApplicantInfo = (props) => {
  return (
    <Card>
      <span className={classes.fullname}>
        <img src={zuck} alt="profile pic" className={classes.zuck} />
        <input type="text" placeholder="Full name" className={classes.name} />
      </span>
      <hr className={classes.hr}/>
      <div className={classes['info-wrapper']}>
          <span className={classes.detail}>
            <img src={location} alt="location icon" className={classes.location} />
            <input
              type="text"
              placeholder="City, State Zip"
              className={classes.info}
              maxLength="26"
            />
          </span>
          <span className={classes.detail}>
            <img src={phone} alt="phone icon" className={classes.phone} />
            <input
              type="text"
              placeholder="(206) 555-5555"
              className={classes.info}
              maxLength="26"
            />
          </span>
          <span className={classes.detail}>
            <img src={email} alt="email icon" className={classes.email} />
            <input
              type="text"
              placeholder="name@email.com"
              className={classes.info}
              maxLength="26"
            />
          </span>
      </div>
    </Card>
  );
};

export default ApplicantInfo;
