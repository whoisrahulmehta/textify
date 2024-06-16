// import logo from "./logo.svg";
import React, {  useEffect, useState } from "react";

import "./App.css";
import Loadingp from "./components/Loadingp";
import Mainpage from "./components/Mainpage";

function App() {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
setIsloading(false);
    },5000);
    return () => clearTimeout(timer);

  }, []);

  return (
   <div className={`App`}>
    {isLoading ? 
    <Loadingp />
     : 
     <Mainpage  />
    }
  </div>
  )
}

export default App;
