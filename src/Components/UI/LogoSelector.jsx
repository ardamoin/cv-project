import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

import classes from "./LogoSelector.module.css";
import silhouette from "../../Assets/silhouette.png";

const LogoSelector = (props) => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.selector}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className={classes["logo-input"]}
        data-tooltip-id="logo-tooltip"
        data-tooltip-content="Select logo"
        data-tooltip-place="left"
      />

      <Tooltip id="logo-tooltip" />

      {imageSrc && (
        <img src={imageSrc} alt="Company logo" className={classes.logo} />
      )}
      {!imageSrc && (
        <img src={silhouette} alt="Company logo" className={classes.logo} />
      )}
    </div>
  );
};

export default LogoSelector;
