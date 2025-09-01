import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FancyButton from "./FancyButton";

/*Write this line to import component 'MyComponent' from another file, 
showing relative path */
import MyComponent from "./MyComponent.jsx";

const IMAGE_URLS = [
  "https://static-task-assets.react-formula.com/711612.jpg",
  "https://static-task-assets.react-formula.com/607528.jpg",
  "https://static-task-assets.react-formula.com/714109.jpg",
  "https://static-task-assets.react-formula.com/331987.jpg",
  "https://static-task-assets.react-formula.com/990651.jpg",
];

function App() {
  const [imageIndx, setImageIdx] = useState(2);
  return (
    <div>
      <div className="text-cyan-400 text-lg text-center border border-black">
        description above pic
      </div>
      <div
        className="flex justify-center border-black items-center
      border border-red"
      >
        <button>
          <i
            className="fa-regular fa-circle-left 
        text-cyan-400 hover:text-cyan-500"
          ></i>
        </button>
        <img
          className="m-8 object-cover h-[250px] w-[200px] rounded-lg"
          src={IMAGE_URLS[imageIndx]}
        />
        <button>
          <i
            className="m-4 text-lg 
        fa-regular fa-circle-right  text-cyan-400 hover:text-cyan-500"
          ></i>
        </button>
      </div>
    </div>
  );
}

export default App;
