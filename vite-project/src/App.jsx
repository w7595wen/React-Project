import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Component1 from "./Component1.jsx";
import Component2 from "./Component2.jsx";

function App() {
  return (
    <div>
      <Component1>Header text</Component1>
      <Component2>Header text</Component2>
    </div>
  );
}

export default App;
