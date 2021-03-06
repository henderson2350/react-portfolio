import './App.css';
import React from "react"
import { HashRouter as Router, Route } from "react-router-dom";
import AboutMe from './pages/AboutMe'
import Homepage from './pages/Homepage'
import Resumé from './pages/Resumé'
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router basename="/">
      <div className="container-fluid">
        <Navbar />
        <Wrapper>
          <Route exact path='/react-portfolio' component={Homepage} />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={AboutMe} />
          <Route exact path='/resume' component={Resumé} />
          <Footer />
        </Wrapper>
      </div>      
    </Router>
  );
}

export default App;
