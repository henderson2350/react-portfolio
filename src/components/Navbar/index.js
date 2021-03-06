import React from 'react'
import './style.css'
import pdf from '../../photos/oct-6.pdf'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
      <div id="try">
        <header>
        <h1>CLARE HENDERSON</h1>
        <nav>
          <Link to="/">Work</Link>
          <Link to="/about">About Me</Link>
          <a href= {pdf} target="_blank">Resume</a>
        </nav>
      </header>
      </div>
    )
}

export default Navbar