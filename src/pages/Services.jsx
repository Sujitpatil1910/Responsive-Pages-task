import React from 'react';

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 animate-fade-in">Our Service Offerings</h2>
        <p className="text-lg text-gray-600 mb-12 animate-fade-in delay-100">
          Strategies that Drive Property Market Excellence
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Automotive SEO',
              desc: 'Ignite online visibility and outrun the competition. Accelerate your business growth today with tailored automotive SEO strategies.'
            },
            {
              title: 'PPC Precision',
              desc: 'Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns designed to boost your ROI.'
            },
            {
              title: 'Social Acceleration',
              desc: 'Engage and influence your audience across social media platforms, amplifying your brand\'s presence and creating meaningful connections.'
            },
            {
              title: 'Content Excellence',
              desc: 'Craft compelling, automotive-specific content that resonates with enthusiasts, builds trust, and drives user engagement.'
            },
            {
              title: 'Web Design',
              desc: 'Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.'
            },
            {
              title: 'Data-Driven Insights',
              desc: 'Leverage data to refine your strategies, making informed decisions that drive measurable revenue growth.'
            },
            {
              title: 'End-to-End Solutions',
              desc: 'From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.'
            },
            {
              title: 'Video Marketing',
              desc: 'Unleash the power of video marketing: captivate, engage, and elevate your brand with compelling visual stories that resonate with your audience.'
            }
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-700 ease-in-out animate-fade-up"
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
