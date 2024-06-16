import {
  faAddressBook,
  faAddressCard,
  faHouse,
  faKeyboard,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Navbar({ theme, toggleTheme }) {
  return (
    
      <nav className={`navBar ${theme} w-100 navigation text-dark d-flex align-items-center justify-content-between`}>
        <section className="brand fs-3 ms-3"> 
          <span className={`text-${theme ==="light" ? "dark" : "light"  } icon`}>
            <FontAwesomeIcon icon={faKeyboard} />
          </span>
          {"  "}
          <span className={` text-danger fs-2`}>T</span>
          <span className={`text-${theme ==="light" ? "dark" : "light"  }`}>3XT!FY</span>
        </section>
        <section className= {`alerts fs-6 text-${theme === "light" ? "danger" :"success" }`} >
           MANIPULATION OF TEXT ! IS ALL WHAT WE DO !
        </section>
        <section className="menu">
          <ul>
            <li>
              <a href="#">
                <span class="icon">
                  <FontAwesomeIcon icon={faHouse} />
                </span>
                {"  "}Home
              </a>
            </li>
            <li>
              <a href="#about" >
                <span class="icon">
                  <FontAwesomeIcon icon={faAddressCard} />
                </span>
                {"  "}About
              </a>
            </li>
            <li>
              <a href="#contact">
                <span class="icon">
                  <FontAwesomeIcon icon={faAddressBook} />
                </span>
                {"  "}Contact
              </a>
            </li>
            <li>
              <a className="" onClick={toggleTheme}>
                {theme === "dark" ? (
                  <span class="icon">
                    {" "}
                    <FontAwesomeIcon icon={faToggleOn} />
                  </span>
                ) : (
                  <span class="icon">
                    {" "}
                    <FontAwesomeIcon icon={faToggleOff} />
                  </span>
                )}
                {"  "}Night
              </a>
            </li>
          </ul>
        </section>
      </nav>
    
  );
}

export default Navbar;
