import React from "react";
import { Tooltip } from "react-tooltip";

import classes from "./AddExperience.module.css";

import addBtn from "../../Assets/addBtn.svg";

const AddExperience = (props) => {
  return (
    <>
      <img
        id="add-delete-btn"
        src={addBtn}
        alt="add experience button"
        className={classes["add-btn"]}
        data-tooltip-id="add-btn"
        data-tooltip-content="Add experience"
        data-tooltip-place="bottom"
        onClick={props.onAddExperience}
      />
      <Tooltip id="add-btn" />
    </>
  );
};

export default AddExperience;
