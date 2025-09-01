import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FancyButton from "./FancyButton";

/*Write this line to import component 'MyComponent' from another file, 
showing relative path */
import MyComponent from "./MyComponent.jsx";

const IMAGE_URLS = ["https://static-task-assets.react-formula.com/711612.jpg"];

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button>
        <i className="fa-regular fa-circle-left"></i>
      </button>
      <img
        className="m-8 object-cover h-[250px] w-[200px] rounded-lg"
        src="https://static-task-assets.react-formula.com/711612.jpg"
      />
      <button>
        <i
          className="m-4 text-5xl 
        fa-solid fa-circle-chevron-left text-cyan-400 hover:text-cyan-500"
        ></i>
      </button>
    </div>
  );
}

export default App;
