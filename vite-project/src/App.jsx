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

const Box = (props) => {                                                 /*tells what type of data this variable is (JS object */
  const {label, bgColor} = props;                                       /* destructure things like label, bgcolor */
  return <div style={{                                                  /* use built-in style prop on this div */                                                /* open up 2 sets of {}, 1 to start evaluating JS */
        background: bgColor                                           /* another st of {} is a plain old JS object */
         }}
    >
      {label}
    </div>
};


function App() {
  const [count, setCount] = useState(0)
  return <div>
    <Box label= 'hello' bgColor='CornflowerBlue' />
  </div>;                                  
};

export default App;
