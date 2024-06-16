import React, { useState } from "react";
import Navbar from "./Navbar";
import Text from "./Text";
function Mainpage() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(() => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <div className={`mainpage ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Text theme={theme} />
      </div>
    </>
  );
}

export default Mainpage;
