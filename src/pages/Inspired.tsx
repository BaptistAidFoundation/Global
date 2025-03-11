import { Heart, Users, Lightbulb, Share2 } from 'lucide-react';

export default function Inspired() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#0A0F2C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Inspired to Help</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Discover meaningful ways to contribute and make a difference in your community.</p>
        </div>
      </div>

      {/* Ways to Help */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ways to Get Involved</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
              <p className="text-gray-600">Join our team of dedicated volunteers making a difference.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Partner With Us</h3>
              <p className="text-gray-600">Collaborate on projects and initiatives to expand our impact.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Ideas</h3>
              <p className="text-gray-600">Contribute your expertise and innovative solutions.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Spread the Word</h3>
              <p className="text-gray-600">Help us reach more people by sharing our mission.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Form */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Volunteer Application</h2>
          <form className="bg-white rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Areas of Interest</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select an area</option>
                <option>Community Outreach</option>
                <option>Education Support</option>
                <option>Healthcare Services</option>
                <option>Administrative Support</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Availability</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Weekdays</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Evenings</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Weekends</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Flexible</span>
                </label>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Why do you want to volunteer?</label>
              <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4}></textarea>
            </div>

            <button type="submit" className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}