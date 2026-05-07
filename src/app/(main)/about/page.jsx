import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About Dragon News | Our Mission & Team",
  description: "Learn about Dragon News - our mission to deliver truthful, unbiased journalism without fear or favour. Meet our team of dedicated journalists.",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Dragon News
          </h1>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Dragon News is a premier news organization dedicated to delivering
            high-quality, unbiased journalism. Founded in 2024, we've quickly
            become a trusted source for millions of readers worldwide.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Our team of experienced journalists works around the clock to bring
            you the latest news, in-depth analysis, and investigative reports
            that matter to you.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To inform, educate, and empower our readers with accurate, fair, and
            comprehensive news coverage. We believe in journalism that serves
            the public interest and holds power accountable.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-2 text-gray-600">
            <p>📧 Email: contact@dragonnews.com</p>
            <p>📞 Phone: +1 (555) 123-4567</p>
            <p>📍 Address: 123 News Street, Digital City, DC 12345</p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
