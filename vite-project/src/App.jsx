import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Component1 from "./Component1.jsx";
import Component2 from "./Component2.jsx";

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
      <div className="bg-violet-100">
        <button>
          <i className="fa-regular fa-circle-left text-slate-800 hover:text-yellow-200 mr-2"></i>
        </button>
      </div>
      <Component2 display={DISPLAYS[0]} />
      <button>
        <i className="fa-regular fa-circle-right text-slate-800 hover:text-yellow-200 mr-2"></i>
      </button>
    </div>
  );
}

export default App;
