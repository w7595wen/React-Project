import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const Title = () => {
  console.log('running Title');             /*give a output message in developer's console */
  return <div>

  hello world 
  </div>
};

const Description = () => {                 /*start description tag */
  console.log('running Description');             /*give a output message in developer's console */
  return <div>Enter description here</div>;
};

const Box = (props) => {                                                 /* tells what type of data this variable is */
  const {label, bgColor, textColor} = props;                             /* destructure things like label, bgcolor */
  return <div style={{                                                  /* use built-in style prop on this div */  
        background: bgColor,
        color: textColor                                           /* another st of curly brackets is a plain old JS object */
         }}>
      {label}
    </div>
};


function App() {
  const [count, setCount] = useState(0)
  return <div>
    <Box label= 'hello' 
    bgColor='CornflowerBlue' 
    textColor= 'Lavender'                                 /*the prop corresponds to what's destructured there */
    />

    <Box label= 'hi' 
    bgColor='Black' 
    textColor= 'Lavender'                                 /*the prop corresponds to what's destructured there */
    />
  </div>;                                  
};

export default App;
