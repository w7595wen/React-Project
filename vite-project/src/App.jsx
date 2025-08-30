import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const Title = () => {
  console.log(
    "running Title"
  ); /*give a output message in developer's console */
  return <div>hello world</div>;
};

const Description = () => {
  /*start description tag */
  console.log(
    "running Description"
  ); /*give a output message in developer's console */
  return <div>Enter description here</div>;
};

const Box = (props) => {
  /* tells what type of data this variable is */
  const { label, bgColor, textColor, large } =
    props; /* destructure things like label, bgcolor */
  return (
    <div
      style={{
        /* use built-in style prop on this div */ background: bgColor,
        color:
          textColor /* another st of curly brackets is a plain old JS object */,
        fontSize: large
          ? "40px"
          : "12px" /* another prop is boolean expression (we call large) */,
      }}
    >
      {label}
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Box
        label="hello" /* box 1 */
        bgColor="CornflowerBlue"
        textColor="Lavender" /*the prop corresponds to what's destructured there */
        large={true} /* set to true so apply font size 40 px */
      />

      <Box
        label="hi" /* box 2*/
        bgColor="Black"
        textColor="Lavender" /*the prop corresponds to what's destructured there */
        large={false} /* set to false so apply font size 12 px */
      />
    </div>
  );
}

export default App;
