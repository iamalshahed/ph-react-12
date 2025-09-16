import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Shahed</h1>

      {/* components */}
      <Developers name='AL Shahed' tech='JavaScript'></Developers>

      <Developers name='Bokchoy' tech='Python'></Developers>
    </>
  )
}

function Developers(props){
  return(
    <div>
      <h3>Dev Name: {props.name}</h3>
      <p>Tech Stack: {props.tech}</p>
    </div>
  )
}

export default App
