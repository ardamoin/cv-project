import React from "react";

import Card from "../UI/Card";
import classes from "./SoftSkills.module.css";

const SoftSkills = () => {
  return (
    <Card>
      <span className={classes.title} contentEditable role="textbox"/>
      <textarea
        className={classes.skills}
        name="softSkills"
        id="softSkills"
        cols="25"
        rows="6"
        placeholder={
          "Humility\nTeamwork\nLeadership\nSelf-Starter\nProblem Solving\nProject Management"
        }
      ></textarea>
    </Card>
  );
};

export default SoftSkills;
