import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./constants/constants";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
