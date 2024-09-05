import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/ProjectsPage';
import Contacts from './Components/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
      <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
