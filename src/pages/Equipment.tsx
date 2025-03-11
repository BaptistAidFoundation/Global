import { Truck, Package, FileCheck, Clock } from 'lucide-react';

export default function Equipment() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#0A0F2C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Equipment Donation</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Help us provide essential equipment to communities in need.</p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Donation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Form</h3>
              <p className="text-gray-600">Fill out our equipment donation form with details.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Review</h3>
              <p className="text-gray-600">Our team will review your donation offer.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Acceptance</h3>
              <p className="text-gray-600">Receive confirmation and preparation instructions.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pickup</h3>
              <p className="text-gray-600">We'll arrange pickup or delivery of equipment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment Form */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Equipment Donation Form</h2>
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
              <label className="block text-gray-700 mb-2">Equipment Type</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select equipment type</option>
                <option>Medical Equipment</option>
                <option>Educational Materials</option>
                <option>Office Equipment</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Equipment Description</label>
              <textarea 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                rows={4}
                placeholder="Please provide details about the equipment, including condition and age"
              ></textarea>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Pickup Address</label>
              <textarea 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                rows={3}
                placeholder="Enter the address where the equipment can be picked up"
              ></textarea>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Preferred Pickup Time</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Morning</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Afternoon</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Evening</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Flexible</span>
                </label>
              </div>
            </div>

            <button type="submit" className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Submit Donation
            </button>
          </form>
        </div>
      </div>

      {/* Additional Info */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Equipment We Accept</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Medical Equipment</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Hospital Beds</li>
                <li>Wheelchairs</li>
                <li>Medical Supplies</li>
                <li>Diagnostic Equipment</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Educational Materials</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Computers</li>
                <li>Books</li>
                <li>School Supplies</li>
                <li>Learning Tools</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Office Equipment</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Furniture</li>
                <li>Electronics</li>
                <li>Communication Devices</li>
                <li>Office Supplies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}