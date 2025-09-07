import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Component1 from "./Component1.jsx";
import Component2 from "./Component2.jsx";
import Component3 from "./Component3.jsx";
import Component4 from "./Component4.jsx";
import Component5 from "./Component5.jsx";

const DISPLAYS = [
  {
    q1: "Name:",
    a1: "W i n g c h e e",
    q2: "Dream holiday spot:",
    a2: "Hong Kong",
  },
  {
    q1: "Ideal boba order:",
    a1: "XL Taro boba with milk-foam, no ice, 100% sweet",
    q2: "Dreamy pencil-case set-up:",
    a2: "4+ pastel highlighters + fine-tip ballpoint pens",
  },
];

function App() {
  return (
    <div>
      <Component1>Header text</Component1>
      <div className="bg-violet-100">
        <div className="flex flex-row justify-between ml-2">
          <button>
            <i className="fa-regular fa-circle-left text-slate-800 hover:text-yellow-200 mr-2"></i>
          </button>
          <button>
            <i className="fa-regular fa-circle-right text-slate-800 hover:text-yellow-200 mr-2"></i>
          </button>
        </div>
      </div>
      <Component2 display={DISPLAYS[0]} />
      <div className="bg-violet-100 text-purple-600  text-2xl text-right">
        .
      </div>
      <Component3>text</Component3>
      <div className="bg-violet-100 text-purple-600  text-2xl text-right">
        .
      </div>
      <Component4>text</Component4>
      <div className="bg-violet-100 text-purple-600  text-2xl text-right">
        .
      </div>
      <Component5>text</Component5>
    </div>
  );
}

export default App;
