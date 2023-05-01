import React from "react";

import Card from "../UI/Card";

import classes from "./Education.module.css";

const Education = () => {
  return <Card className={classes.card}>
    <h2 className={classes.title}>Education</h2>
    <span className={classes.education} role="textbox" contentEditable/>
  </Card>;
};

export default Education;
