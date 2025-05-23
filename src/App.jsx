import ReactDOM from "react-dom/client";

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Research from './components/Research';

function App() {

  return (
      
      <BrowserRouter>
      
      <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="research" element={<Research />} />
          {/* <Route path="profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App