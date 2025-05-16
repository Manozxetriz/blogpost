
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Section1 from './components/section1/section1'
import Navbar from './components/Nav/Navbar'
import Work from './components/Pages/Work';
import Blogs from './components/Pages/Blogs';
import Contact from './components/Pages/Contact';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/work" element={<Work />} />
         <Route path="/blogs" element={<Blogs/>} />
           <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
