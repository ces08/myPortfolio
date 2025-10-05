import ReactDOM from "react-dom/client";

import './index.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectPage from './components/ProjectPage';
import Navbar from './components/Navbar'
import Profile from './components/Profile'

function App() {

  return (
    
      
    <HashRouter>
    <div className = "h-screen w-screen relative parent-box p-5 bg-white-back dark:bg-black-back">
        <div className="w-full h-full border-2 box-border border-quasi-black dark:border-gray-back overflow-x-hidden rounded-2xl">
          <Navbar />
          <Routes>
            <Route index element={<Projects />} />
            <Route path=":id" element={<ProjectPage />} />
            <Route path="contact" element={<Profile />} />
          </Routes>
        </div>
    </div>
  </HashRouter>
  )
}

export default App