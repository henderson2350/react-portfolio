import React from 'react'
import './style.css'
import pdf from '../../photos/clare-henderson-resume.pdf'

function Navbar() {
    return (
        <header>
        <h1>CLARE HENDERSON</h1>
        <nav>
          <a href="/">Work</a>
          <a href="/about">About Me</a>
          <a href= {pdf} target="_blank">Resume</a>
        </nav>
      </header>
    )
}

export default Navbar