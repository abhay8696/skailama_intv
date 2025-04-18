import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Welcome from './pages/Welcome/Welcome'
import Home from './pages/Home/Home';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Transcript from './pages/ProjectPage/Transcript';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path='/project/:id' element={<ProjectPage />} />
      </Routes>
    </Router>
  )
}

export default App
