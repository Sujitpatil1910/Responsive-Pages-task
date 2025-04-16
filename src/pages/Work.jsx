import React, { useState, useEffect } from 'react';

const Work = () => {
  const [visible, setVisible] = useState(false);
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);

  const checkVisibility = () => {
    const sections = ['section1', 'section2', 'section3'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        if (sectionId === 'section1') setSection1Visible(true);
        if (sectionId === 'section2') setSection2Visible(true);
        if (sectionId === 'section3') setSection3Visible(true);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on initial load

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className={`text-center mb-16 ${section1Visible ? 'animate-fade-up' : 'fade-in'}`} id="section1">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Navigating Real Estate’s Digital Landscape
        </h1>
        <p className="text-xl text-gray-600">
          Insights for Real Estate Marketing Advantage
        </p>
      </section>

      {/* Market Analysis Section */}
      <section className={`mb-20 ${section2Visible ? 'animate-fade-up' : 'fade-in'}`} id="section2">
        <h2 className="text-3xl font-bold text-gray-900 mb-8"></h2>
        <p className="text-lg text-gray-600 mb-12"></p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Targeted Buyer Persona
            </h3>
            <p className="text-gray-600">
              Understand and connect with your new property buyers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Market Trends Analysis
            </h3>
            <p className="text-gray-600">
              Proactive insights to guide real estate strategies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Competitor Insights
            </h3>
            <p className="text-gray-600">
              Stand out in the property market with informed strategies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Visual Content Appeal
            </h3>
            <p className="text-gray-600">
              Captivate buyers with appealing visuals and immersive experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Conversion Strategies Section */}
      <section className={`mb-20 ${section3Visible ? 'animate-fade-up' : 'fade-in'}`} id="section3">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Driving Property Inquiries to Conversions
          </h2>
          <p className="text-xl text-gray-600">
            Streamlined Strategies for Real Estate Success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Call-to-Action Optimization
            </h3>
            <p className="text-gray-600">
              Our carefully crafted CTAs guide potential buyers through the property journey, 
              enhancing engagement and conversion rates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Landing Page Efficiency
            </h3>
            <p className="text-gray-600">
              Tailored landing pages are designed for maximum property lead conversion. 
              They provide seamless user experiences and clear pathways for inquiry submission.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Social Proof Utilization
            </h3>
            <p className="text-gray-600">
              Leverage the power of testimonials and success stories from satisfied buyers 
              to build trust and credibility.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Mobile-Friendly Experience
            </h3>
            <p className="text-gray-600">
              Responsive design ensures seamless browsing across all devices, 
              enhancing engagement for on-the-go property seekers.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Expertise in Action
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Effective CTAs
              </h3>
              <p className="text-gray-600 mb-4">
                Strategic CTAs drove 40% increase in property inquiries
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
                View Case Study
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Conversion-Optimized Landing Pages
              </h3>
              <p className="text-gray-600 mb-4">
                30% increase in lead conversion through optimization
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
                Explore Results
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Trust Building with Social Proof
              </h3>
              <p className="text-gray-600 mb-4">
                25% boost in conversion rates through testimonials
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
                Discover More
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mobile-First Success
              </h3>
              <p className="text-gray-600 mb-4">
                25% increase in mobile inquiries
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
                Learn How
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-50 rounded-xl py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Real Estate Marketing?
        </h2>
        <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 text-lg font-semibold">
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default Work;
