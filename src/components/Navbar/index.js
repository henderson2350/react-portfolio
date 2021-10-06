import React from 'react'
import './style.css'
import pdf from '../../photos/resume-oct-6.pdf'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header>
        <h1>CLARE HENDERSON</h1>
        <nav>
          <Link to="/">Work</Link>
          <Link to="/about">About Me</Link>
          <a href= {pdf} target="_blank">Resume</a>
        </nav>
      </header>
    )
}

export default Navbar