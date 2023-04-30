import React from "react";

import LogoSelector from "../UI/LogoSelector";
import classes from "./Experience.module.css";

import Card from "../UI/Card";
import earth from "../../Assets/earth.svg";
import like from "../../Assets/like.svg";
import share from "../../Assets/share.svg";
import comment from "../../Assets/comment.svg";
import smile from "../../Assets/smile.svg";
import zuck from "../../Assets/zuck.png";

const Experience = () => {
  return (
    <Card className={classes.card}>
      <span className={classes.header}>
        <LogoSelector />
        <span className={classes["header-text"]}>
          <span className={classes.experience} role="textbox" contentEditable />
          <span className={classes.details}>
            <span
              placeholder="Company"
              className={`${classes.detail} ${classes.company}`}
              role="textbox"
              contentEditable
            />
            <span className={classes.bullet}>•</span>
            <span
              placeholder="Location"
              className={`${classes.detail} ${classes.location}`}
              role="textbox"
              contentEditable
            />
            <span className={classes.bullet}>•</span>
            <span
              placeholder="Job Title"
              className={`${classes.detail} ${classes.title}`}
              role="textbox"
              contentEditable
            />
            <span className={classes.bullet}>•</span>
            <img
              src={earth}
              alt="earth"
              className={classes.detail}
              style={{ height: "20px", width: "20px" }}
            />
            <div className={classes.break} />
            <span
              placeholder="Date"
              className={`${classes.detail} ${classes.date}`}
              role="textbox"
              contentEditable
            />
          </span>
        </span>
      </span>
      <hr className={classes.hr} />
      <span className={classes.description} role="textbox" contentEditable />
      <hr className={classes.hr} />
      <span className={classes.lcs}>
        <span className={classes["lcs-item"]}>
          <img src={like} alt="like" />
          Like
        </span>
        <span className={classes["lcs-item"]}>
          <img src={comment} alt="comment" />
          Comment
        </span>
        <span className={classes["lcs-item"]}>
          <img src={share} alt="share" />
          Share
        </span>
      </span>
      <hr className={classes.hr} />
      <span className={classes.footer}>
        <img src={zuck} alt="zuck" />
        <div className={classes["footer-item"]}>
          Write a comment...
          <img src={smile} alt="smile" />
        </div>
      </span>
    </Card>
  );
};

export default Experience;
