import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const Title = () => {
  return <div>
  hello world 
  </div>
};

const Description = () => {                 /*start description tag */
  return <div>Enter description here</div>;
};

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <Title />
    <Description />                          
    todo
  </div>;                                  /* ended description tag */
};

export default App
