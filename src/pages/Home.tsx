import React, { useEffect, useState } from 'react';
import Logo from '../Assets/Logo/Baptist2.svg';
import person1 from '../Assets/images/person_1.jpg';
import person2 from '../Assets/images/person_2.jpg';
import person3 from '../Assets/images/person_3.jpg';
import person4 from '../Assets/images/person_4.jpg';
import person5 from '../Assets/images/person_5.jpg';
import image1 from '../Assets/images/image_1.jpg';
import image2 from '../Assets/images/image_2.jpg';
import image3 from '../Assets/images/image_4.jpg';
import '../css/flaticon.css';

export default function Home() {
  const donations = [
    { name: "Ethan Thompson", amount: "$30000", cause: "Global Health Education", status: "Pending", image: person1, statusColor: "text-orange-500" },
    { name: "Lucas Brooks", amount: "$15000", cause: "Medical Research", status: "Donated", image: person2, statusColor: "text-green-500" },
    { name: "Gabriel Flynn", amount: "$96000", cause: "Global Health Education", status: "Donated", image: person3, statusColor: "text-green-500" },
    { name: "Sophia Carter", amount: "$25000", cause: "Emergency Relief", status: "Pending", image: person5, statusColor: "text-orange-500" },
    { name: "William Johnson", amount: "$50000", cause: "Child Welfare", status: "Donated", image: person4, statusColor: "text-green-500" },
  ];

  const blogPosts = [
    { title: "Global Health Innovations", excerpt: " Transforming Lives Through Healthcare. Access to quality healthcare is a fundamental human right. However, millions of people worldwide face significant barriers in accessing essential medical care. At Baptist-Aid, we're committed to bridging this gap and ensuring everyone receives the healthcare they deserve.", image: image1 },
    { title: "The Future of Medical Research", excerpt: "Revolutionizing Healthcare Through Innovation. The medical field is rapidly evolving, with groundbreaking technologies and techniques transforming the way we deliver healthcare. At Baptist-Aid, we're committed to embracing innovation and harnessing its potential to save lives.", image: image2 },
    { title: "Child Welfare Programs Worldwide", excerpt: "Addressing Health Inequities Worldwide. Health disparities persist globally, with marginalized communities facing significant barriers in accessing quality healthcare. At Baptist-Aid, we're committed to addressing these inequities and ensuring everyone receives equal access to healthcare.", image: image3 },
];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % donations.length);
    }, 3000);

    return () => clearInterval(interval);
}, [donations.length]);

  return (
    <div className="min-h-screen" style={{fontFamily:"DBHeadRegular, sans-serif"}}>
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
          <img src={Logo} alt="Baptist-Aid Logo" className="block mr-auto  ml-auto h-48" />
            <h1 className="text-5xl font-bold mb-4" >Welcome to Baptist-Aid Foundation</h1>
            <p className="text-3xl mb-2">Compassionate Care, Globally Connected</p>
            <p className="text-base mb-8">Together we can make a difference in people's lives</p>
            <a href="/donate" className=" bg-[#5cb6f9] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#050a30] transition duration-300">
              Donate Now
            </a>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Counter Box */}
            <div className="flex justify-center">
              <div className="bg-[#050a30] text-white p-8 text-start w-full">
                <span className="block text-2xl mb-4">Served Over</span>
                <strong className="text-4xl font-semibold" data-number="1432805">1,432,805</strong>
                <span className="block mt-2 text-lg">Children in 78 countries in the world</span>
              </div>
            </div>

            {/* Volunteer Box */}
            <div className="flex justify-center shadow-[-20px_0_30px_-15px_rgba(128,128,128,0.3)]">
              <div className="bg-[#5cb6f9] text-white p-8 text-center w-full">
                <h3 className="text-2xl font-semibold mb-4">Be a Volunteer</h3>
                <p className="text-lg">Share Your Time, Share Your Compassion: By volunteering with us, you'll not only be giving back to your community but also gaining valuable experience and skills.</p>
              </div>
            </div>

            {/* Donation Box */}
            <div className="flex justify-center shadow-[-10px_0_20px_-5px_rgba(0,0,0,0.3)]">
              <div className="bg-[#cae8ff] text-[#050a30] p-8 text-center w-full">
                <h3 className="text-2xl font-semibold mb-4">Donate Money</h3>
                <p className="text-lg">Change Lives with Your Generosity: Your donation has the power to bring hope, healing, and transformation to individuals and families in need.</p>
                <a href="donate.html" className="inline-block bg-[#5cb6f9] text-white font-semibold px-4 py-2 mt-4 rounded-none hover:bg-[#050a30] transition">
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white" >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center bg-white rounded-none p-6 transition-transform hover:scale-105">
              <div className="flex justify-center items-center w-16 h-16 bg-[#f4f6fc] rounded-full mb-4">
                <span className="flaticon-donation-1 text-[#5cb6f9] text-3xl"></span>
              </div>
              <h3  className="text-xl font-semibold text-gray-800 mb-2">Make Donation</h3>
              <p className="text-gray-600">Give the Gift of Health: Your donation brings medical aid and support to those who need it most, transforming lives and communities worldwide.</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center bg-white rounded-none p-6 transition-transform hover:scale-105">
              <div className="flex justify-center items-center w-16 h-16 bg-[#f4f6fc] rounded-full mb-4">
                <span className="flaticon-charity text-[#5cb6f9] text-3xl"></span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Become A Volunteer</h3>
              <p className="text-gray-600">Join the movement, become a volunteer: Be part of a global community of changemakers working together to provide quality healthcare to those who need it most.</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center bg-white rounded-none p-6 transition-transform hover:scale-105">
              <div className="flex justify-center items-center w-16 h-16 bg-[#f4f6fc] rounded-full mb-4">
                <span className="flaticon-donation text-[#5cb6f9] text-3xl"></span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sponsorship</h3>
              <p className="text-gray-600">Partner with us, change lives: By sponsoring Baptist-Aid, you'll be supporting our mission to provide quality healthcare to underserved populations and making a real difference in the lives of others.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Impact Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl text-[#050a30] font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#5cb6f9] mb-2">3M+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#5cb6f9] mb-2">90+</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#5cb6f9] mb-2">120+</div>
              <div className="text-gray-600">Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#5cb6f9] mb-2">30+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Section */}
      <div className="py-16 bg-white"> 
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
              <h2 className="text-3xl text-[#050a30] font-bold text-center mb-12">Latest Donations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                  Support Our Mission, Donate Today: Join us in our efforts to bridge the healthcare gap and ensure that everyone has access to quality medical care.
              </p>
          </div>

          <div className="relative w-full overflow-hidden">
              <div className="flex lg:w-[30%] space-x-10 transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {[...donations, ...donations].map((donor, index) => (
                      <div key={index} className="bg-white p-6 rounded-none shadow-sm w-full flex-shrink-0">
                          <div className="flex items-center mb-4">
                              <img src={donor.image} alt={donor.name} className="w-16 h-16 rounded-full object-cover" />
                              <div className="ml-4">
                                  <h3 className="text-lg font-semibold">{donor.name}</h3>
                                  <span className={`font-semibold ${donor.statusColor}`}>{donor.status}</span>
                              </div>
                          </div>
                          <p className="text-gray-700">Donated <span className="font-bold">{donor.amount}</span> for <span className="text-[#5cb6f9] font-semibold">{donor.cause}</span></p>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl text-[#050a30] font-bold text-center mb-12">Latest Blogs</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Stay informed with the latest insights, updates, and stories related to healthcare and global welfare.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="bg-white shadow-sm overflow-hidden">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-6 flex flex-col">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                                <p className="text-gray-600 mt-2 leading-loose">{post.excerpt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}