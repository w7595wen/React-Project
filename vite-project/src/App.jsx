import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FancyButton from "./FancyButton";

/*Write this line to import component 'MyComponent' from another file, 
showing relative path */
import MyComponent from "./MyComponent.jsx";

import QuoteBox1 from "./QuoteBox1.jsx";
import QuoteBox2 from "./QuoteBox2.jsx";
import QuoteBox3 from "./QuoteBox3.jsx";

function App() {
  return (
    <div className="flex flex-col items-center">
      <QuoteBox1>quote</QuoteBox1>
      <QuoteBox2>quote</QuoteBox2>
      <QuoteBox3>quote</QuoteBox3>
    </div>
  );
}

export default App;
