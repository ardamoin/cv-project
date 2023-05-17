import React, { useState } from "react";

import PPContext from "../../context/pp-context";
import zuck from "../../Assets/zuck.png";

import classes from "./CV.module.css";
import CVHeader from "./CVHeader";
import Experience from "./Experience";
import Education from "./Education";
import ApplicantInfo from "./ApplicantInfo";
import TechnicalSkills from "./TechnicalSkills";
import SoftSkills from "./SoftSkills";
import AddExperience from "../UI/AddExperience";

const CV = (props) => {
  const [experiences, setExperiences] = useState([]);
  const [profilePic, setProfilePic] = useState(zuck);

  const handleAddExperience = () => {
    setExperiences((prevExperiences) => {
      return [...prevExperiences, <Experience key={Date.now()} />];
    });
  };

  return (
    <div className={classes.CV} id={props.id}>
      <PPContext.Provider
        value={{
          imageSrc: profilePic,
          setImageSrc: setProfilePic,
        }}
      >
        <CVHeader />
        <div className={classes["cv-body"]}>
          <div className={classes.sidebar}>
            <TechnicalSkills />
            <SoftSkills />
          </div>
          <div className={classes.main}>
            <ApplicantInfo />
            <Experience />
            <Experience />
            <Experience />
            {experiences.map((experience) => experience)}
            <Education />
            <AddExperience onAddExperience={handleAddExperience} />
          </div>
        </div>
      </PPContext.Provider>
    </div>
  );
};

export default CV;
