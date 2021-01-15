import React from "react";
import Classes from "./Nothing.module.css";
import Img from "../../../assets/images/Nothing to do.png";

const Nothing = (props) => {
  return (
    <div className={Classes.Center}>
      <img className={Classes.Image} src={Img} alt="img not found!" />
      <h2 className={Classes.Heading}>{props.heading}</h2>
    </div>
  );
};
export default Nothing;
