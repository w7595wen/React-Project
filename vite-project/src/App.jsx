import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Header from "./Header.jsx";
import Search from "./Search.jsx";

function App() {
  return (
    <div>
      <Header>Header text</Header>
      <Search>Search text</Search>
    </div>
  );
}

export default App;
