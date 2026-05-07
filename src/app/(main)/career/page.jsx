import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Dragon News - career | Our Mission & Team",
  description: "Learn about Dragon News - our mission to deliver truthful, unbiased journalism without fear or favour. Meet our team of dedicated journalists.",
};

const CareerPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Journalist",
      department: "Editorial",
      location: "New York, NY",
      type: "Full-time",
      experience: "5+ years",
      salary: "$70k - $90k",
    },
    {
      id: 2,
      title: "Digital Content Writer",
      department: "Digital Media",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "$45k - $60k",
    },
    {
      id: 3,
      title: "Video Editor",
      department: "Multimedia",
      location: "Los Angeles, CA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$55k - $75k",
    },
    {
      id: 4,
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
      experience: "2+ years",
      salary: "$40k - $50k",
    },
    {
      id: 5,
      title: "Photographer",
      department: "Visual Media",
      location: "Chicago, IL",
      type: "Contract",
      experience: "3+ years",
      salary: "$50k - $65k",
    },
    {
      id: 6,
      title: "Data Journalist",
      department: "Investigative",
      location: "Washington, DC",
      type: "Full-time",
      experience: "4+ years",
      salary: "$75k - $95k",
    },
  ];

  const benefits = [
    {
      icon: "🏥",
      title: "Health Insurance",
      desc: "Comprehensive medical, dental, and vision coverage",
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      desc: "Above market rates with annual reviews",
    },
    {
      icon: "🏖️",
      title: "Paid Time Off",
      desc: "4 weeks vacation + public holidays",
    },
    {
      icon: "📚",
      title: "Learning Budget",
      desc: "$2,000 annual for courses and conferences",
    },
    {
      icon: "🏠",
      title: "Remote Work",
      desc: "Flexible work arrangements available",
    },
    { icon: "📈", title: "401(k) Matching", desc: "Up to 5% company match" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Help us shape the future of journalism and make a difference in the
            world
          </p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Join Dragon News?
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We're building a workplace where journalists can thrive and do their
          best work
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Openings Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Current Openings
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Find your perfect role and join our mission
          </p>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        📁 {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        📍 {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        ⏰ {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        🎓 {job.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        💰 {job.salary}
                      </span>
                    </div>
                  </div>
                  <button className="btn py-6 bg-purple-600 text-white px-6 rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap">
                    Apply Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          What We Look For
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          The qualities that make someone successful at Dragon News
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold mb-2">Passion for Truth</h3>
            <p className="text-gray-600">
              A commitment to factual, unbiased reporting and journalistic
              integrity
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-xl font-bold mb-2">Innovation Mindset</h3>
            <p className="text-gray-600">
              Willingness to embrace new technologies and storytelling methods
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
            <p className="text-gray-600">
              Ability to work effectively with diverse teams and perspectives
            </p>
          </div>
          <div className="bg-orange-50 rounded-lg p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-2">Adaptability</h3>
            <p className="text-gray-600">
              Thriving in a fast-paced, ever-changing news environment
            </p>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Application Process
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Four simple steps to join our team
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                1
              </div>
              <h3 className="font-bold mb-2">Submit Application</h3>
              <p className="text-sm text-gray-600">
                Send your resume and portfolio
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                2
              </div>
              <h3 className="font-bold mb-2">Initial Screening</h3>
              <p className="text-sm text-gray-600">Phone interview with HR</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                3
              </div>
              <h3 className="font-bold mb-2">Technical Interview</h3>
              <p className="text-sm text-gray-600">
                Skills assessment & team meeting
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                4
              </div>
              <h3 className="font-bold mb-2">Offer Letter</h3>
              <p className="text-sm text-gray-600">Welcome to the team!</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Don't see the perfect role? Send us your resume anyway!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn py-6 bg-purple-600 text-white px-8 rounded-lg hover:bg-purple-700 transition-colors">
            View All Jobs
          </button>
          <button className="btn py-6 border-2 border-purple-600 text-purple-600 px-8 rounded-lg hover:bg-purple-50 transition-colors">
            Send General Application
          </button>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-8 mb-8">
        <Link
          href="/"
          className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CareerPage;
