import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import { Location } from "history";
import "./styles/app.scss";

const App: React.FC = () => {
  const location: Location = useLocation();
  const [locationNow, setLocationNow] = useState<Location>(location);
  const [transition, setTransistion] = useState<string>("transitionIn");

  const animation = (): void => {
    if (transition === "transitionOut") {
      setTransistion("transitionIn");
      setLocationNow(location);
    }
  };

  useEffect(() => {
    if (location !== locationNow) setTransistion("transitionOut");
  }, [location, locationNow]);

  return (
    <div className={`${transition}`} onAnimationEnd={() => animation()}>
      <Routes location={locationNow}>
        <Route path="" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </div>
  );
};

export default App;