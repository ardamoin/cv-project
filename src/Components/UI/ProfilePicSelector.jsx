import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

import classes from "./ProfilePicSelector.module.css";

import zuck from "../../Assets/zuck.png";

const ProfilePicSelector = ({ height, width }) => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  let imgHeightWidth = { height: `${height}`, width: `${width}` };

  return (
    <div className={classes.selector}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className={classes["pp-input"]}
        style={imgHeightWidth}
        data-tooltip-id="pp-tooltip"
        data-tooltip-content="Change profile pic"
        data-tooltip-place="left"
      />

      <Tooltip id="pp-tooltip" />
      
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Profile pic"
          className={classes.pp}
          style={imgHeightWidth}
        />
      )}
      {!imageSrc && (
        <img
          src={zuck}
          alt="Profile pic"
          className={classes.pp}
          style={imgHeightWidth}
        />
      )}
    </div>
  );
};

export default ProfilePicSelector;
