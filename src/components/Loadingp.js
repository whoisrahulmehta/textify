import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, } from '@fortawesome/free-solid-svg-icons';
import React from "react";

function Loadingp() {
  return (
    <div className = "titleContainer galaxy ">
      <div className="title">
        <span className="tletters licon"><FontAwesomeIcon icon={faKeyboard} /></span>
        <span className="tletters">T</span>
        <span className="tletters">3</span>
        <span className="tletters">x</span>
        <span className="tletters">T</span>
        <span className="tletters">!</span>
        <span className="tletters">F</span>
        <span className="tletters">Y</span>
      </div>
      <div className="loader"></div>
    </div>
  );
}

export default Loadingp;
