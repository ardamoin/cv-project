import React from "react";

import classes from "./CV.module.css";
import CVHeader from "./CVHeader";
import ApplicantInfo from "./ApplicantInfo";

const CV = () => {
  return <div className={classes.CV}>
    <CVHeader />
    <ApplicantInfo />
  </div>;
};

export default CV;
