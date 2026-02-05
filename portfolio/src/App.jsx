import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Deandra's Portfolio</h1>
      <div className="card">
        <button onClick={() => window.open("https://www.linkedin.com/in/deandrah42/", "_blank")}>
          navigate to Linkedin
        </button>
      </div>
    </>
  )
}

export default App
