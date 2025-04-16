import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import homeLogo from "../assets/homelogo1.png";
import homeLogo2 from "../assets/homelogo2.png"; // Import the second logo

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Elevate Real Estate Success with
              <span className="text-red-600 block">Osumare's Digital Expertise</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Tailored Solutions for Thriving in the Digital Real Estate Landscape
            </p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors">
              Get Started
            </button>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={homeLogo} 
              alt="Real Estate Digital Solutions" 
              className="w-full max-w-xl"
            />
          </div>
        </div>
      </section>

      {/* Digital Mastery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Estate-Focused Digital Mastery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock the Potential of Digital Real Estate Excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "Market Intelligence",
                content: "Data-driven insights for strategic property positioning"
              },
              {
                title: "Lead Generation",
                content: "Advanced digital strategies for quality lead acquisition"
              },
              {
                title: "Brand Authority",
                content: "Establish thought leadership in real estate markets"
              },
              {
                title: "Conversion Optimization",
                content: "Maximize inquiry-to-conversion ratios"
              },
              {
                title: "Omnichannel Marketing",
                content: "Integrated campaigns across all digital platforms"
              },
              {
                title: "Performance Analytics",
                content: "Real-time monitoring and ROI optimization"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-100 w-14 h-14 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-red-600 text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Real Estate Marketing?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            At Osumare, we understand that the real estate landscape demands a digital perspective that aligns with property marketing complexities.
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Digital Journey
          </button>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex flex-col items-center gap-6">
            <img 
              src="https://www.dropbox.com/s/ipx91osglyczpdt/delivery_experience.svg?raw=1" 
              alt="Real Estate Expertise" 
              className="w-full"
            />
          
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Digital Solutions for Modern Real Estate
            </h2>
            <p className="text-gray-600 mb-8">
              Our range of services is meticulously designed to catalyze your brand's success in the competitive digital property market. From targeted social campaigns to AI-driven market analysis, we provide end-to-end solutions that drive results.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors">
                Explore Services
              </button>
              <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-full hover:bg-red-50 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
