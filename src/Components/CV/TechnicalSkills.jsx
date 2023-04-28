import React from "react";

import Card from "../UI/Card";
import classes from "./TechnicalSkills.module.css";


const TechnicalSkills = () => {
  return (
    <Card className={classes.card}>
      <input
        type="text"
        defaultValue="Languages"
        className={classes.title}
      />
      <br />
      <textarea
        name="languages"
        id="languages"
        cols="25"
        rows="7"
        placeholder={
          "Java / C#\nJavaScript / TypeScript\nPython\nC / C++\nBash / PowerShell\nHTML / CSS / SQL"
        }
        className={classes.skills}
      ></textarea>
      <hr className={classes.hr} />
      <br />
      <input
        type="text"
        defaultValue="Technologies"
        className={classes.title}
      />
      <br />
      <textarea
        name="technologies"
        id="technologies"
        cols="25"
        rows="7"
        placeholder={
          "Azure & AWS\nReact / Redux\n.Net\nMongoDb\nNode.js / Express.js\nNetlify (AWS Lambda)\nSocket.io"
        }
        className={classes.skills}
      ></textarea>
    </Card>
  );
};

export default TechnicalSkills;
