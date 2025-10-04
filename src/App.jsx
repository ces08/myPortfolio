import ReactDOM from "react-dom/client";

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectPage from './components/ProjectPage';
import Navbar from './components/Navbar'
import Profile from './components/Profile'

function App() {

  return (
    
      
    <BrowserRouter>
    <div className = "main-container relative parent-box p-5">
        <div className="w-full h-full border-2 box-border border-[#3b3b3b] overflow-x-hidden rounded-2xl">
          <Navbar />
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/:id" element={<ProjectPage />} />
            <Route path="contact" element={<Profile />} />
          </Routes>
        </div>
    </div>
  </BrowserRouter>
  )
}

export default App