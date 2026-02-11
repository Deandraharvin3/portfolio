import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './tabs/navigation'

function App() {

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <div>
        <Navigation />
      </div>
      <h1>I am Software Engineer & PhD Candidate Deandra Harvin</h1>
      <p>Highly skilled Full Stack Engineer with a proven track record of success and a passion for innovation.‬
‭ Offering 4+ years of hands-on experience, including being a teacher's assistant for 3 years and internships‬
‭ at Facebook, Google, and Visa. Adept at leveraging emerging technologies, optimizing databases, and‬
‭ harnessing the power of cloud computing. Committed to driving organizational growth and exceeding‬
‭ expectations through the application of advanced software engineering skills.</p>
      <div className="card">
        <ul>
          <li><a href="https://www.linkedin.com/in/deandrah42/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a></li>
        </ul>
      </div>
    </>
  )
}

export default App
