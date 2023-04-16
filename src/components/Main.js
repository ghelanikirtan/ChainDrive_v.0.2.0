import { Routes, Route } from "react-router-dom";

// components import here
import Home from "./main/Home";
import About from "./main/About";
import Contact from "./main/Contact";

import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Main;
