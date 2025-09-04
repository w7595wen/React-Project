import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FancyButton from "./FancyButton";

/*Write this line to import component 'MyComponent' from another file, 
showing relative path */
import MyComponent from "./MyComponent.jsx";

import QuoteBox1 from "./QuoteBox1.jsx";

const quote1 = {
  text1: "text",
  text2: "text",
  text3: "text",
};

const quote2 = {
  text1: "text",
  text2: "text",
  text3: "text",
};

const quote3 = {
  text1: "text",
  text2: "text",
  text3: "text",
};

function App() {
  return (
    <div className="flex justify-center">
      <QuoteBox1>quote</QuoteBox1>
    </div>
  );
}

export default App;
