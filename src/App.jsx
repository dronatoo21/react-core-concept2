import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';

function App() {
  const HandleClick = () => {	
    alert('fahim rag hobe');
  };
  function plusClick(num){
    alert(num + 5)
  }
  return (
    <>
      <h3>Vite + React</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onClick={HandleClick}>click me</button>
      <button onClick={()=>{alert('heheahha')}}>clcik</button>
      <button onClick={() => plusClick(5)}>five</button> */}
    </>
  )
}

export default App
