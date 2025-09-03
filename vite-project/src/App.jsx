import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FancyButton from "./FancyButton";

/*Write this line to import component 'MyComponent' from another file, 
showing relative path */
import MyComponent from "./MyComponent.jsx";

/* import catCard */
import CatCard from "./CatCard";

import NavButton from "./NavButton.jsx";

const CATS = [
  {
    name: "Winnifred",
    age: 10,
    breed: "Scottish Fold",
    location: "Queens, NY",
    imageUrl: "https://static-task-assets.react-formula.com/378212.jpg",
  },
  {
    name: "Abby",
    age: 4,
    breed: "Abysinnian",
    location: "Charleston, WV",
    imageUrl: "https://static-task-assets.react-formula.com/470756.jpg",
  },
  {
    name: "Simon",
    age: 2,
    breed: "Siamese",
    location: "Seattle, WA",
    imageUrl: "https://static-task-assets.react-formula.com/130714.jpg",
  },
];

function App() {
  const [CatIdx, setCatIdx] = useState(0);
  return (
    <div className="flex justify-center items-center">
      <NavButton />
      <CatCard cat={CATS[CatIdx]} />
      <NavButton />
    </div>
  );
}

export default App;
