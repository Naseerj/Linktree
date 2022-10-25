import React from "react";
import "./Section1.css";
import Anette from "./Img/profile__img (1).svg";
import Slack from "./Img/slack.svg";
import Git from "./Img/Icon.svg";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="anettediv">
        <img className="anette" src={Anette} alt="" />
        <p>Anette Black</p>
      </div>
      <div className="firstdiv">
        <h4 className="header1">Twitter Link</h4>
      </div>
      <div className="secondiv">
        <h4 className="header2">Zuri Team</h4>
      </div>
      <div className="thirdiv">
        <h4 className="header3">Zuri Books</h4>
      </div>
      <div className="fourthdiv">
        <h4 className="header4">Python Books</h4>
      </div>
      <div className="fifthdiv">
        <h4 className="header5">Background Check for Coders</h4>
      </div>
      <div className="sixthdiv">
        <h4 className="header6">Design Books</h4>
      </div>
      <footer className="icondiv">
        <img src={Slack} alt="" />
        <img src={Git} alt="" />
      </footer>
    </div>
  );
};

export default Section1;
