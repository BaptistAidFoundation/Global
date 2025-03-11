import { Clock, Users, Target, Award, MapPin, Calendar, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import AboutHero from '../Assets/images/image_1.jpg'
import image1 from '../Assets/images/event-1.jpg'
import image2 from '../Assets/images/event-2.jpg'
import image3 from '../Assets/images/event-3.jpg'
import image4 from '../Assets/images/event-4.jpg'


export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={AboutHero}
            alt="People helping in community" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0F2C] bg-opacity-90"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Baptist-Aid Foundation</h1>
            <p className="text-xl text-gray-300 max-w-3xl">Dedicated to making a positive impact in communities through faith-based initiatives and humanitarian support.</p> &nbsp;
            <p className="text-xl text-gray-300 max-w-3xl">As a social enterprise, our objective is to advance patient care in Low and Middle Income Countries (LMICs). We achieve this by working with funders – including governments, NGOs, charities, and private sector partners – to supply essential healthcare equipment specifically tailored to the LMIC environment, as well as through skill development and capacity building to implement long-term, sustainable change.</p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0A0F2C]">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2005, Baptist-Aid Foundation began with a small group of dedicated individuals who saw a need for community support and decided to take action. What started as local outreach efforts has grown into an international organization serving communities across 27 countries.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our journey has been guided by faith and compassion, with each step taken to ensure that we create sustainable change in the communities we serve. From our first medical mission to our current comprehensive development programs, we've remained committed to our founding principles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Baptist-Aid Foundation stands as a testament to what can be achieved when people come together with a shared vision of creating a better world for all.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={image1}
                alt="Community work" 
                className="rounded-lg shadow-md h-64 object-cover"
              />
              <img 
                src={image4}
                alt="Healthcare support" 
                className="rounded-lg shadow-md h-64 object-cover mt-8"
              />
              <img 
                src={image3}
                alt="Education initiatives" 
                className="rounded-lg shadow-md h-64 object-cover"
              />
              <img 
                src={image2}
                alt="Community building" 
                className="rounded-lg shadow-md h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-[#0A0F2C]">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Baptist-Aid Foundation is committed to extending God's love through practical assistance and support to communities in need. We believe in creating lasting change by addressing both immediate needs and long-term development goals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through our integrated approach, we aim to:
              </p>
              <ul className="text-gray-600 space-y-2 mt-4 ml-5 list-disc">
                <li>Provide essential healthcare services to underserved populations</li>
                <li>Support educational opportunities for children and adults</li>
                <li>Develop sustainable community infrastructure</li>
                <li>Empower individuals through skills training and economic opportunities</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-[#0A0F2C]">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We envision a world where every individual has access to basic necessities, education, and opportunities for growth. Through our faith-based approach, we aim to build stronger, more resilient communities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our vision encompasses:
              </p>
              <ul className="text-gray-600 space-y-2 mt-4 ml-5 list-disc">
                <li>Communities that are self-sufficient and thriving</li>
                <li>Healthcare systems that are accessible to all</li>
                <li>Educational institutions that provide quality learning</li>
                <li>Economic opportunities that foster growth and development</li>
                <li>Spiritual well-being that nurtures hope and purpose</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A0F2C]">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Commitment</h3>
              <p className="text-gray-600 text-center">Dedicated to serving others with unwavering devotion and perseverance in the face of challenges.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Community</h3>
              <p className="text-gray-600 text-center">Building strong relationships and fostering unity through collaborative efforts and mutual respect.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Impact</h3>
              <p className="text-gray-600 text-center">Creating meaningful and lasting change through strategic interventions and sustainable solutions.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Excellence</h3>
              <p className="text-gray-600 text-center">Striving for the highest standards in all we do, ensuring quality and effectiveness in our programs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A0F2C]">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="John Randy" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">John Randy</h3>
              <p className="text-blue-600 mb-3">Executive Director</p>
              <p className="text-gray-600 text-sm mb-4">With over 20 years of experience in humanitarian work, John leads our organization with vision and compassion.</p>

            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Sarah Johnson" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-blue-600 mb-3">Operations Manager</p>
              <p className="text-gray-600 text-sm mb-4">Sarah ensures our programs run efficiently and effectively, bringing her expertise in international development.</p>

            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Michael Brown" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Michael Brown</h3>
              <p className="text-blue-600 mb-3">Community Relations</p>
              <p className="text-gray-600 text-sm mb-4">Michael builds and maintains our relationships with communities, partners, and supporters worldwide.</p>

            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A0F2C]">Our Journey</h2>
          <div className="space-y-12">
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  2005
                </div>
                <div className="h-full w-0.5 bg-blue-200 mt-2"></div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex-1">
                <h3 className="text-xl font-semibold mb-2">Foundation Established</h3>
                <p className="text-gray-600">Baptist-Aid Foundation was founded with a mission to serve communities in need through faith-based initiatives.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  2010
                </div>
                <div className="h-full w-0.5 bg-blue-200 mt-2"></div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex-1">
                <h3 className="text-xl font-semibold mb-2">International Expansion</h3>
                <p className="text-gray-600">Expanded operations to 10 countries, establishing our first international healthcare and education programs.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  2015
                </div>
                <div className="h-full w-0.5 bg-blue-200 mt-2"></div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex-1">
                <h3 className="text-xl font-semibold mb-2">Major Milestone</h3>
                <p className="text-gray-600">Reached 100,000 individuals through our programs and launched our sustainable development initiative.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  2020
                </div>
                <div className="h-full w-0.5 bg-blue-200 mt-2"></div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex-1">
                <h3 className="text-xl font-semibold mb-2">Pandemic Response</h3>
                <p className="text-gray-600">Mobilized resources to provide emergency relief during the global pandemic, supporting healthcare systems in 20 countries.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  2025
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex-1">
                <h3 className="text-xl font-semibold mb-2">Present Day</h3>
                <p className="text-gray-600">Currently operating in 27 countries with over 250,000 individuals impacted through our comprehensive programs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A0F2C]">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Headquarters</h3>
              <p className="text-gray-600">123 Faith Avenue</p>
              <p className="text-gray-600">Suite 456</p>
              <p className="text-gray-600">New York, NY 10001</p>
            </div> */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
              <p className="text-gray-600">Email: info@baptist-aid.org</p>
              <p className="text-gray-600">Fax: (123) 456-7891</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-gray-600">9:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Closed on Weekends & Holidays</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Twitter className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}