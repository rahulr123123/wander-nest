
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Packages from './components/Packages';
import About from './components/About';
import Contact from './components/Contact';
import PackageDetails from './pages/PackageDetails';


export default function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/packages/:packageId" element={<PackageDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}