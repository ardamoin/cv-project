import React from "react";

import Card from "../UI/Card";
import classes from "./TechnicalSkills.module.css";

const cardStyles = {
  paddingTop: "30px",
  paddingBottom: "30px",
  border: "solid 1px black",
  boxShadow: "0px 4px 4px rgba(0, 4, 4, 0.25)",
};

const TechnicalSkills = () => {
  return (
    <Card style={cardStyles}>
      <input
        type="text"
        defaultValue="Languages"
        className={classes.title}
        maxLength="17"
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
        maxLength="17"
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
