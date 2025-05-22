import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CarApp from "./components/CarApps";
import Other from "./components/Other";

function App() {
  console.log("parent render");
  return (
    <>
      <Other />
      <CarApp />
    </>
  );
}

export default App;
