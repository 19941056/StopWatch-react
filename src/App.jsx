import React from 'react'
import Countdown from './components/Countdown'
import Digital from './components/Digital'
import StopWatch from './components/StopWatch'
import "./App.css";
const App = () => {
  return (
    <div className="App">
    <Digital></Digital>
      <Countdown></Countdown>
      <StopWatch></StopWatch>
    </div>
  )
}

export default App
