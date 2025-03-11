import { Heart, Lightbulb, Globe, Book, Target, Users, Clock, Award } from 'lucide-react';
import CauseHero from '../Assets/images/bg_1.jpg'

export default function Cause() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={CauseHero}
            alt="People helping in community" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0F2C] bg-opacity-60"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Cause</h1>
            <p className="text-xl text-gray-300 max-w-3xl">Supporting communities through education, healthcare, and sustainable development initiatives.</p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 mb-8">
            At Baptist-Aid Foundation, we believe in creating lasting change through compassionate action. 
            Our mission is to empower communities, provide essential services, and build sustainable futures 
            for those facing hardship around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="flex items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Established</h3>
                <p className="text-gray-600">2005</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">People Helped</h3>
                <p className="text-gray-600">250,000+</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Countries</h3>
                <p className="text-gray-600">27</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Causes */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare Access</h3>
              <p className="text-gray-600 mb-4">Providing medical supplies and healthcare services to underserved communities.</p>
              <ul className="text-gray-600 space-y-2 ml-5 list-disc">
                <li>Mobile medical clinics in rural areas</li>
                <li>Maternal and child health programs</li>
                <li>Medical supply distribution</li>
                <li>Health education and disease prevention</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Education Support</h3>
              <p className="text-gray-600 mb-4">Ensuring access to quality education through scholarships and resources.</p>
              <ul className="text-gray-600 space-y-2 ml-5 list-disc">
                <li>School construction and renovation</li>
                <li>Scholarship programs for underprivileged students</li>
                <li>Teacher training and development</li>
                <li>Educational materials and technology</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Development</h3>
              <p className="text-gray-600 mb-4">Building sustainable infrastructure and empowering local communities.</p>
              <ul className="text-gray-600 space-y-2 ml-5 list-disc">
                <li>Clean water projects and sanitation</li>
                <li>Sustainable agriculture initiatives</li>
                <li>Microfinance and small business support</li>
                <li>Community center construction</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Youth Empowerment</h3>
              <p className="text-gray-600 mb-4">Creating opportunities for young people through training and mentorship.</p>
              <ul className="text-gray-600 space-y-2 ml-5 list-disc">
                <li>Leadership development programs</li>
                <li>Vocational training and skills development</li>
                <li>Mentorship and counseling services</li>
                <li>Youth-led community initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">120+</div>
              <p className="text-gray-700 font-medium">Healthcare Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">85</div>
              <p className="text-gray-700 font-medium">Schools Supported</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">45,000</div>
              <p className="text-gray-700 font-medium">Children Educated</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-gray-700 font-medium">Community Projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Impact Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Community Support"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">March 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Healthcare Initiative in Ghana</h3>
                <p className="text-gray-600 mb-4">Providing essential medical care to over 1,000 individuals in rural communities through our mobile clinic program.</p>
                <p className="text-gray-600 italic">"The mobile clinic saved my daughter's life. We couldn't travel to the city hospital, but the doctors came to us." — Abena K.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Education Support"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">January 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Education Program in Kenya</h3>
                <p className="text-gray-600 mb-4">Supporting 500 students with scholarships and educational resources, enabling them to continue their education despite economic challenges.</p>
                <p className="text-gray-600 italic">"The scholarship changed everything for me. Now I can pursue my dream of becoming a doctor." — James M.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Community Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">November 2022</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Youth Development in Nigeria</h3>
                <p className="text-gray-600 mb-4">Empowering young leaders through mentorship and skill development programs, creating pathways to employment and community leadership.</p>
                <p className="text-gray-600 italic">"The leadership program gave me confidence and skills to start my own business." — Sarah O.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community-Led</h3>
              <p className="text-gray-600">We work directly with local communities to understand their needs and develop solutions that are culturally appropriate and sustainable.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Impact</h3>
              <p className="text-gray-600">Our programs are designed to create lasting change by building local capacity and addressing root causes of challenges.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparent & Accountable</h3>
              <p className="text-gray-600">We maintain the highest standards of financial integrity and regularly report on the impact of our programs to donors and stakeholders.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-[#0A0F2C] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Cause</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Together, we can make a lasting difference in the lives of those who need it most. Your support enables us to continue our vital work in communities around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Donate Now
            </a>
            <a
              href="/volunteer"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[#0A0F2C] transition duration-300"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}