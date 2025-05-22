import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CarApp from "./components/CarApps";

function App() {
  console.log("parent render");
  return (
    <>
      <CarApp />
    </>
  );
}

export default App;
