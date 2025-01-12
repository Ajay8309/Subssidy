import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SubsidyLayout from './pages/Subsidy/SubsidyLayout';
import PMEGP from './pages/Subsidy/schemes/PMEGP';
import Finance from './pages/Finance/Finance';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import './App.css';
import Footer from './components/Footer/Footer';
import CMEGP from './pages/Subsidy/schemes/CMEGP';
import { NHM, NHB, NABARD } from './pages/Subsidy/schemes/NHM';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/subsidy" element={<SubsidyLayout />}>
            <Route path="pmegp" element={<PMEGP />} />
            <Route path="cmegp" element={<CMEGP />} />
            <Route path="nhm" element={<NHM />} />
            <Route path="nhb" element={<NHB />} />
            <Route path="nabard" element={<NABARD />} />

          </Route>
          <Route path="/finance" element={<Finance />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;