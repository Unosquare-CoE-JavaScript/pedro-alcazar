import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [stateButtonColor, setStateButtonColor] = useState({color: 'red'})
  const newColor = stateButtonColor.color === 'red' ? 'blue' : 'red'
  const handleChangeColor = () => {
    setStateButtonColor({color: newColor})
  }
  return (
    <div className="App">
      <button style={{backgroundColor: stateButtonColor.color}} onClick={handleChangeColor} >Change to {newColor}</button>
    </div>
  );
}

export default App;
