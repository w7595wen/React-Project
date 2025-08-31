import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FancyButton from "./FancyButton";

/*Write this line to import component 'MyComponent' from another file, 
showing relative path */
import MyComponent from "./MyComponent.jsx";

const IMAGE_URLS = [
  "https://github.com/w7595wen/mywebsite/blob/main/images/user.png?raw=true",
];

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <img
        className="object-cover h-[250px] w-[200px] rounded-lg"
        src="https://github.com/w7595wen/mywebsite/blob/main/images/user.png?raw=true"
      />
    </div>
  );
}

export default App;
