import {
    fa0,
    fa1,
  fa7,
  faA,
  faBroom,
  faBullhorn,
  faCopy,
  faE,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import About from "./About";

function Text({ theme }) {
  const [inputtext, setInputText] = useState(
    "Enter the text you want to analyse here"
  );
  const [outputtext, setOutputText] = useState(
    "Your result after pressing button will be placed here"
  );

  //   if (inputtext.split(" ").length !== null) {
  //     wordscount = inputtext.split(" ").length - 1;
  //   } else {
  //     wordscount = 0;
  //   }
  //   const words = wordscount;
  const words = inputtext
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  //   let charscount;
  //   if (inputtext.length !== null) {
  //     charscount = inputtext.length;
  //   } else {
  //     charscount = 0;
  //   }
  //   const chars = charscount;
  const chars = inputtext.replace(/\s/g, "").length;

  const handleUpperCaseBtn = () => {
    console.log("UpperCase Btn was Clicked");
    let newText = inputtext.toUpperCase();
    setOutputText(newText);
    // props.showAlert('Converted to Upper Case');
  };
  const handleLowerrCaseBtn = () => {
    console.log("LowerCase Btn was Clicked");
    let newText2 = inputtext.toLowerCase();
    setOutputText(newText2);
    // props.showAlert('Converted to Lower Case');
  };
  const handleClear = () => {
    console.log("clear btn is pressed ");
    let clearText = "";
    setInputText(clearText);
    setOutputText(clearText);
    // props.showAlert('Cleared the Text Area');
  };
  const handleremovespace = () => {
    console.log("Remove space btn pressed");
    let arr = inputtext.split(/[\s]+/).join(" ");
    setOutputText(arr);
    // props.showAlert('Removing blank spaces');
  };
  //   const handleBinaryBtn = () => {
  //     console.log("Binary convertor is being used.");

  //     let stringToBinary = (inputtext) => {
  //       return inputtext
  //         .split("")
  //         .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
  //         .join("");
  //     };
  //     setOutputText(stringToBinary);
  //     // props.showAlert('Converting binary to text');
  //   };
  const handleBinaryBtn = () => {
    console.log("Binary converter is being used.");

    const stringToBinary = (inputtext) => {
      return inputtext
        .split("")
        .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ");
    };

    const convertedText = stringToBinary(inputtext); // Assuming inputText is the string input
    setOutputText(convertedText);
    // props.showAlert('Converting binary to text'); // Uncomment if you want to use showAlert
  };
  //   const handleBinarytoEngBtn = () => {
  //     console.log("Binary convertor is being used to convert to Eng.");
  //     const binaryToString = (inputtext) => {
  //       return inputtext
  //         .match(/.{1,8}/g)
  //         .map((chunk) => String.fromCharCode(parseInt(chunk, 2)))
  //         .join("");
  //     };
  //     setOutputText(binaryToString);
  //     // props.showAlert('Converting to Binary');
  //   };
  const handleBinarytoEngBtn = () => {
    console.log("Binary converter is being used to convert to English.");

    const binaryToString = (outputtext) => {
      if (!outputtext) return ""; // Handle empty input
      return outputtext
      .trim()
      .split(" ") // Split by space
      .map((binary) => String.fromCharCode(parseInt(binary, 2))) // Convert each binary string to a character
      .join(""); // Join all characters into a string
    };

    const convertedText = binaryToString(outputtext); // Assuming inputText is the binary input string
    setOutputText(convertedText);
    // props.showAlert('Converting to English'); // Uncomment if you want to use showAlert
  };
  const handleCopy = (event) => {
    console.log("you pressed copy btn");
    const coptText = document.getElementById("exampleFormControlTextarea1");
    coptText.select();
    navigator.clipboard.writeText(coptText.value);
    // props.showAlert('Coping to clipboard');
  };
  const handleCapitalise = () => {
    let capText = inputtext
      .split(/[\s]+/)
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
      .join(" ");
    setOutputText(capText);
    // props.showAlert('Capitalising Text');
  };
  const handleOnChange = (event) => {
    console.log("handleOnChange");
    setInputText(event.target.value);
  };
  const handleseprator = () => {
    console.log("Ypu pressed seprator btn");
    let sepText = inputtext.split("").toString();
    setOutputText(sepText);
    // props.showAlert('Separting Text into letters');
  };
  const handleSpeak = () => {
    const message = inputtext;
    const speech = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(speech);
  };
  return (
    <>
      <div id = "home" className={`content text-center ${theme}`}>
        <div className="textAreaM">
          <textarea
            className={`form-control `}
            id="exampleFormControlTextarea"
            rows="3"
            value={inputtext}
            style={{ resize: "none" }}
            onChange={handleOnChange}
          ></textarea>
          <div className="info d-flex align-items-center justify-content-center  p-2">
            <p className="text-center ">
              You have entered <strong>"{chars}"</strong> characters and total{" "}
              <strong>"{words}"</strong> words.
            </p>
          </div>
        </div>
        <div className="CCBtn d-flex align-items-center justify-content-evenly">
          <button
            className="btn btn-outline-primary px-4"
            onClick={handleClear}
          >
            <span class="icon me-4">
              <FontAwesomeIcon icon={faBroom} />
            </span>{" "}
            Clear - Canvas
          </button>
          <button className="btn btn-outline-primary px-4" onClick={handleCopy}>
            <span class="icon me-4">
              <FontAwesomeIcon icon={faCopy} />
            </span>
            COPY OUTPUT
          </button>
          <button
            className="btn btn-outline-primary px-5"
            onClick={handleSpeak}
          >
            <span class="icon me-2">
              <FontAwesomeIcon icon={faBullhorn} />
            </span>{" "}
            Speak
          </button>
        </div>
        <div className="utlibtns d-flex justify-content-evenly align-items-center border border-light border-start-0 border-end-0 py-3 ">
          <div className="textUtiB d-flex flex-column">
            <button
              className="btn btn-outline-primary px-5"
              onClick={handleBinaryBtn}
            >
              <span class="icon me-2">
                <FontAwesomeIcon icon={fa1} />
                <FontAwesomeIcon icon={fa0} />
                <FontAwesomeIcon icon={fa1} />
              </span>{" "}
              English to Binary
            </button>
            <button
              className="btn btn-outline-primary px-5"
              onClick={handleBinarytoEngBtn}
            >
              <span class="icon me-2">
                <FontAwesomeIcon icon={faE} />
              </span>{" "}
              Binary to English
            </button>
          </div>
          <div className="caseUti d-flex flex-column">
            <button
              className="btn btn-outline-primary px-5 "
              onClick={handleUpperCaseBtn}
            >
              <span class="icon me-2">
                <FontAwesomeIcon icon={faA} />
              </span>
              To Upper case
            </button>
            <button
              className="btn btn-outline-primary px-5"
              onClick={handleCapitalise}
            >
              <span class="icon me-2">
                <FontAwesomeIcon icon={faA} />
                <FontAwesomeIcon icon={faInfo} />
              </span>{" "}
              Capitalize Text
            </button>
            <button
              className="btn btn-outline-primary px-5"
              onClick={handleLowerrCaseBtn}
            >
              <span class="icon me-2">
                <FontAwesomeIcon icon={faInfo} />
              </span>{" "}
              To Lower Case
            </button>
          </div>
          <div className="spcUti d-flex flex-column">
            <button
              className="btn btn-outline-primary px-5"
              onClick={handleseprator}
            >
              Seprate Letters
            </button>
            <button
              className="btn btn-outline-primary px-5"
              onClick={handleremovespace}
            >
              Remove Extra Space
            </button>
          </div>
        </div>
        <div className="outArTX px-0 py-4">
          <textarea
            className="lstTextOut form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={outputtext}
            readOnly
            style={{ resize: "none" }}
            // onChange={handleOnChange}
          ></textarea>
        </div>
        <About  theme={theme}/>
        <span className={` ${theme} end text-center p-4 w-100 mx-auto d-block text-muted fw-600`}>Powered By Rahul Mehta ( Github  @  whoisrahulmehta )</span>

      </div>
    </>
  );
}

export default Text;
