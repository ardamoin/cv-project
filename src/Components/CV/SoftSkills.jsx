import React from "react";

import Card from "../UI/Card";
import classes from "./SoftSkills.module.css";

const SoftSkills = () => {
  return (
    <Card>
      <span className={classes.title} contentEditable role="textbox" />
      <span className={classes.skills} contentEditable role="textbox">
        Humility
        <br />
        Teamwork
        <br />
        Leadership
        <br />
        Self-Starter
        <br />
        Problem Solving
        <br />
        Project Management
      </span>
    </Card>
  );
};

export default SoftSkills;
