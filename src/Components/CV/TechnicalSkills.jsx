import React from "react";

import Card from "../UI/Card";
import classes from "./TechnicalSkills.module.css";

const TechnicalSkills = () => {
  return (
    <Card className={classes.card}>
      <span className={classes.languages} contentEditable role="textbox" />
      <br />
      <span contentEditable role="textbox" className={classes.skills}>
        Java / C#
        <br />
        JavaScript / TypeScript
        <br />
        Python
        <br />C / C++
        <br />
        Bash / PowerShell
        <br />
        HTML / CSS / SQL
      </span>
      <hr className={classes.hr} />
      <br />
      <span className={classes.technologies} contentEditable role="textbox" />
      <br />
      <span contentEditable role="textbox" className={classes.skills}>
        Azure & AWS
        <br />
        React / Redux
        <br />
        .Net
        <br />
        MongoDb
        <br />
        Node.js / Express.js
        <br />
        Netlify (AWS Lambda)
        <br />
        Socket.io
      </span>
    </Card>
  );
};

export default TechnicalSkills;
