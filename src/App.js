import React from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './router'
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  )
}

export default App
