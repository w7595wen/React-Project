import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Component1 from "./Component1.jsx";
import Component2 from "./Component2.jsx";
import Component3 from "./Component3.jsx";

const DISPLAYS = [
  {
    text1: "text1",
    text2: "text2",
  },
  {
    text1: "text1",
    text2: "text2",
  },
];

function App() {
  return (
    <div>
      <Component1>Header text</Component1>
      <Component3>button</Component3>
      <Component2 display={DISPLAYS[0]} />
      <Component3>button</Component3>
    </div>
  );
}

export default App;
