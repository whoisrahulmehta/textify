import { faKeyboard, faSquarePhone, faSquarePhoneFlip, faTentArrowLeftRight, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons/faSquarePen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import 'about.css'
function About({ theme }) {
  return (
    <div id="about" className="about">
      <footer className={`${theme}`}>
        <section className="one">
          <div className="textFoot ">
            <h5 className={`text-${theme === "light" ? "danger" :"success" }`}>Start Manipulating your text now ! </h5>
            <h1>
              Start Using our <b className="text-primary">Textify</b> app now
            </h1>
            <div className="h3">
              <input
                className="text-dark "
                type="email"
                placeholder="  Enter Your Email Here ... .. ."
              />
              <a>
                <FontAwesomeIcon icon={faVoicemail} />
              </a>
            </div>
          </div>
          <div className="imgFoot">
          <img src="/wordcloud.png" alt="404" />
          </div>
        </section>
        <section className="two">
          <div className="fir">
            <section className="brand fs-1 ms-3">
              <span className={`${theme} icon`}>
                <FontAwesomeIcon icon={faKeyboard} />
              </span>
              {"  "}
              <span className={` text-danger fs-1`}>T</span>
              <span className={`${theme}`}>3XT!FY</span>
            </section>
            <p>
              With this app you can manioulate your text, hear it from AI voice
              for review, can even encode it into binary for your convenience !
              <p className="text-warning">
                You are free to use this as your PA for texting !
              </p>
            </p>
          </div>
          <div className="sec">
            <p >
              <a> About </a>
            </p>
            <p>
              <a> Jobs </a>
            </p>
            <p>
              <a> Docs </a>
            </p>
          </div>
          <div className="thr">
            <p>
              <a> Terms & Conditions </a>
            </p>
            <p>
              <a> Privacy Policy</a>
            </p>
            <p>
              <a> Coockie Policy </a>
            </p>
          </div>
          <div id="contact" className="fth">
            <p>Lets Chat</p>
            <p>Emal Me now </p>
            <div className="social">
              <span><FontAwesomeIcon icon={faSquarePhone}/> </span>
              <span><FontAwesomeIcon icon={faSquarePen}/></span>
              <span><FontAwesomeIcon icon={faTentArrowLeftRight}/></span>
              <span><FontAwesomeIcon icon={faSquarePhoneFlip}/></span>
            </div>
          </div>
        </section>
      </footer>
    </div>
    // </div>
  );
}

export default About;
