import { useState } from 'react';
import { Heart, Home, Info, HandHeart, Gift, Truck, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo/Baptist1.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0A0F2C] text-white shadow-md relative z-50" style={{fontFamily:"DBHeadRegular, sans-serif"}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Baptist-Aid Logo" className="h-44 w-48" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLinks />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <Menu className="w-6 h-6 hidden" /> : <Menu className="w-6 h-6 " />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50" 
          onClick={() => setMenuOpen(false)}
        >
          <div 
            className="fixed top-0 left-0 w-10/12 max-w-xs h-full bg-[#0A0F2C] flex flex-col p-6 space-y-4 text-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center self-center">
                <img src={Logo} alt="Baptist-Aid Logo" className="h-32" />
              </Link>
              <button className="self-center items-center text-white mt-4" onClick={() => setMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <NavLinks setMenuOpen={setMenuOpen} />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ setMenuOpen }) {
  const links = [
    { to: '/', label: 'Home'},
    { to: '/about', label: 'About'},
    { to: '/cause', label: 'Our Cause'},
    { to: '/donate', label: 'Donate Now'},
    { to: '/inspired', label: 'Inspired to Help'},
    { to: '/equipment', label: 'Equipment Donation'},
  ];

  return (
    <>
      {links.map(({ to, label }) => (
        <Link 
          key={to} 
          to={to} 
          className="flex items-center px-4 py-2 text-white hover:text-blue-400"
          onClick={() => setMenuOpen && setMenuOpen(false)}
        >
          <span>{label}</span>
        </Link>
      ))}
    </>
  );
}
