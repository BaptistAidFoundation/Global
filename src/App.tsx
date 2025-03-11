import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Cause from './pages/Cause';
import Donate from './pages/Donate';
import Inspired from './pages/Inspired';
import Equipment from './pages/Equipment';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cause" element={<Cause />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/inspired" element={<Inspired />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
