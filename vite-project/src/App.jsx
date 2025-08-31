import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

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
        textColor="Lavender" /* prop corresponds to what's destructured there */
        large={true} /* set to true so apply font size 40 px */
      />
      <Box
        label="hi" /* box 2*/
        bgColor="Black"
        textColor="Lavender" /*the prop corresponds to what's destructured there */
        large={false} /* set to false so apply font size 12 px */
      />
      <MyComponent bgColor="Pink" height={120}>
        text between pair tags
      </MyComponent>
      <MyComponent bgColor="Lavender" height={40}>
        Second block of text
      </MyComponent>
      <div>
        <div className="text-rose-300 bg-red-700">text with bg color</div>
        <div className="text-slate-400 border-8 border-sky-500"> border</div>
        <div className="text-slate-400 border-x-8 border-y-2 border-blue">
          border2
        </div>
        <div className="text-2xl bg-emerald-200 text-blue-600">three</div>
        <div className="border-2 border-pink-400 p-8 m-4"> p & m </div>
        <div className="border-2 border-green-400 px-2 py-8"> px, py </div>
        <div className="border-2 border-blue-400 px-2 pb-8">
          {" "}
          only bottom padding{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
