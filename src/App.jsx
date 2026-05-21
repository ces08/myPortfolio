import ReactDOM from "react-dom/client";

import './index.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Projects from './components/Projects';
import ProjectPage from './components/ProjectPage';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from "./components/Footer";

function App() {

  return (
    
      
    <HashRouter>
    <div className = "flex items-center h-screen w-screen relative parent-box p-5 bg-white-back dark:bg-black-back">
        <Navbar />
        <div className="flex flex-col w-full h-full  overflow-x-hidden rounded-2xl">
          <div className="flex-1">
            <Routes>
              <Route index element={<Projects />} />
              <Route path=":id" element={<ProjectPage />} />
              <Route path="about" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </div>
        
    </div>
  </HashRouter>
  )
}

export default App