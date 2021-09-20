import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [stateButtonColor, setStateButtonColor] = useState({color: 'red'})
  const newColor = stateButtonColor.color === 'red' ? 'blue' : 'red'
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const handleChangeColor = () => {
    setStateButtonColor({color: newColor})
  }
  const handleChangeCheckStatus = (e) => {
    setButtonDisabled(e)
    
  }
  return (
    <div className="App">
      <button 
        style={{backgroundColor: buttonDisabled ? 'gray':  stateButtonColor.color}} 
        onClick={handleChangeColor} 
        disabled={buttonDisabled}
        >Change to {newColor}</button> <br/>
      <input type="checkbox" onChange={(e) =>{handleChangeCheckStatus(e.target.checked)}}  />
    </div>
  );
}

export default App;
