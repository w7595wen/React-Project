import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FancyButton from "./FancyButton";

/*Write this line to import component 'MyComponent' from another file, 
showing relative path */
import MyComponent from "./MyComponent.jsx";

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
  console.log(large); /* returns output showing whether large ran */
  return (
    <div
      style={{
        /* use built-in style prop on this div */
        background: bgColor,
        color:
          textColor /* another st of curly brackets is a plain old JS object */,
        fontSize: large
          ? "20px"
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
        textColor="Lavender" /* prop corresponds to what's destructured there */
        large={true} /* set to true so apply font size 40 px */
      />
      <Box
        label="hi" /* box 2*/
        bgColor="Black"
        textColor="Lavender" /*the prop corresponds to what's destructured there */
        large={false} /* set to false so apply font size 12 px */
      />
      <MyComponent bgColor="Pink" height={10}>
        text between pair tags
      </MyComponent>
      <MyComponent bgColor="Lavender" height={10}>
        Second block of text
      </MyComponent>
      <div>
        <div className="text-rose-300 bg-red-700">text with bg color</div>
        <div className="text-2xl bg-emerald-200 text-blue-600">three</div>
        <div className="border-2 border-green-400 px-2 py-8"> px, py </div>
      </div>
      <button className="text-lg border-2 border-green-600 text-green-400 bg-sky-100 text-lg px-8 py-2 m-12, rounded-md">
        1st
      </button>
      <button
        className="m-4 bg-cyan-700 text-cyan-200 p-10 rounded-lg 
        hover:bg-cyan-200 hover:text-cyan-700"
      >
        hover button
      </button>
      <FancyButton>click me</FancyButton>
      <FancyButton>submit</FancyButton>
    </div>
  );
}

export default App;
