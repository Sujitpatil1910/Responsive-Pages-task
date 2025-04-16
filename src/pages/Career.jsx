import React from 'react';

const Career = () => {
  const jobOpenings = [
    {
      title: "Digital Marketing Specialist",
      location: "Pune, India",
      type: "Full-time",
      description: "Drive client campaigns with innovative digital strategies"
    },
    {
      title: "Content Strategist",
      location: "Remote",
      type: "Contract",
      description: "Shape brand narratives for pharma clients"
    },
    {
      title: "SEO Analyst",
      location: "Pune, India",
      type: "Full-time",
      description: "Optimize digital presence for maximum search visibility"
    },
    {
      title: "Social Media Manager",
      location: "Hybrid",
      type: "Full-time",
      description: "Curate engaging social media campaigns across platforms"
    }
  ];

  const benefits = [
    { title: "Competitive Salaries", icon: "💰" },
    { title: "Flexible Hours", icon: "⏱️" },
    { title: "Health Insurance", icon: "🏥" },
    { title: "Learning Budget", icon: "🎓" },
    { title: "Team Retreats", icon: "⛰️" },
    { title: "Growth Opportunities", icon: "📈" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16 animate-fade-up">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Build Your Future with Osumare
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Join India's Leading Digital Marketing Innovators
        </p>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-500">
            Shape the future of digital marketing while growing your career in a dynamic,
            collaborative environment.
          </p>
        </div>
      </section>

      <section className="mb-20 animate-fade-up delay-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Current Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobOpenings.map((job, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                  {job.type}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {job.location}
              </div>
              <p className="text-gray-600 mb-6">{job.description}</p>
              <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                View Position Details →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 animate-fade-up delay-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Why Choose Osumare?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description || "Industry-leading benefits package designed for your success"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-50 rounded-2xl p-8 sm:p-12 mb-20 text-center animate-fade-up delay-300">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          More Than Just a Workplace
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Join a team that values innovation, collaboration, and continuous learning.
          Participate in hackathons, training programs, and industry events.
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
            Meet the Team
          </button>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-50">
            Office Tour
          </button>
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center animate-fade-up delay-400">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Don't See Your Perfect Role?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          We're always looking for passionate marketers. Submit your resume and we'll
          contact you when matching positions become available.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 font-medium">
            Submit Application
          </button>
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 font-medium">
            Refer a Friend
          </button>
        </div>
      </section>
    </div>
  );
};

export default Career;
