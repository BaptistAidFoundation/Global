import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo/Baptist2.svg';


export default function Footer() {
  return (
    <footer className="bg-[#0A0F2C] text-white" style={{fontFamily:"DBHeadRegular, sans-serif"}}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-row items-center">
              <Link to="/" className="flex items-center">
                <img src={Logo} alt="Baptist-Aid Logo" className="h-48" />
              </Link>
              <p className="text-base font-semibold text-gray-300 mb-4">Empowering communities through faith, hope, and charitable action since 2016.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400">About Us</Link></li>
              <li><Link to="/cause" className="text-gray-300 hover:text-blue-400">Our Cause</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-blue-400">Donate Now</Link></li>
              <li><Link to="/inspired" className="text-gray-300 hover:text-blue-400">Get Involved</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Phone size={16} className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                <span>info@baptist-aid.org</span>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2" />
                <span>123 Charity Lane, NY 10001</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates and news.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-[#1A1F3C] text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Baptist-Aid Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}