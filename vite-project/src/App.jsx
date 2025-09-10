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
    q2: "Bucket list item:",
    a2: "Go to Summit One Vanderbilt",
    imageUrl: "https://static-task-assets.react-formula.com/378212.jpg",
  },
  {
    q1: "Fun fact:",
    a1: "♡ pastel colours",
    q2: "Ideal holiday spot:",
    a2: "Hong Kong",
    imageUrl: "https://static-task-assets.react-formula.com/470756.jpg",
  },
];

function App() {
  const [imageIndx, setImageIndx] = useState(0);
  return (
    <div>
      <img
        className="object-cover h-[175px] w-[1400px]"
        src="https://github.com/w87895wen/React-Project/blob/main/vite-project/images/header(800%20x%20300%20px)%20(3).png?raw=true"
      />
      <Component1>Header text</Component1>
      <div className="bg-[#123f94]">
        <div className="flex flex-row justify-between ml-2 p-4 text-4xl">
          <button
            className="text-[#7a36d9] hover:text-yellow-200 mr-2"
            onClick={() => {
              setImageIndx(imageIndx - 1);
            }}
          >
            <i className="fa-regular fa-circle-left"></i>
          </button>
          <button
            className="text-[#7a36d9] hover:text-yellow-200 mr-2"
            onClick={() => {
              setImageIndx(imageIndx + 1);
            }}
          >
            <i className="fa-regular fa-circle-right"></i>
          </button>
        </div>
      </div>
      <Component2 display={DISPLAYS[imageIndx]} />
      <div className="bg-[#123f94] text-purple-600  text-2xl text-right p-4">
        .
      </div>
      <Component3>text</Component3>
      <div className="bg-[#012746] text-purple-600  text-2xl text-right">.</div>
      <img
        className="object-cover h-[175px] w-[1400px]"
        src="https://github.com/w87895wen/React-Project/blob/main/vite-project/images/stars_v4(800%20x%20300%20px).png?raw=true"
      />
      <Component4>text</Component4>
      <img
        className="object-cover h-[175px] w-[1400px]"
        src="https://github.com/w87895wen/React-Project/blob/main/vite-project/images/shooting%20star(800%20x%20300%20px).png?raw=true"
      />
      <div className="bg-[#012746] text-purple-600  text-2xl text-right">.</div>
      <Component5>text</Component5>
    </div>
  );
}

export default App;
