import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const FooterPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Dragon News</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Journalism Without Fear or Favour. Delivering truth, transparency, 
              and trustworthy news since 2024.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 rounded-full hover:bg-sky-500 transition-colors">
                <FaTwitter size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <FaYoutube size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/career" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/01" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Breaking News</Link></li>
              <li><Link href="/category/03" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">International News</Link></li>
              <li><Link href="/category/04" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Sports</Link></li>
              <li><Link href="/category/05" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Entertainment</Link></li>
              <li><Link href="/category/06" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Culture</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-orange-500 mt-0.5" />
                <span className="text-gray-400 text-sm">123 News Street, Digital City, DC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-orange-500" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-orange-500" />
                <span className="text-gray-400 text-sm">contact@dragonnews.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold">Subscribe to Newsletter</h3>
              <p className="text-gray-400 text-sm">Get the latest news delivered to your inbox</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-orange-500 text-gray-300"
              />
              <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Dragon News. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs text-center md:text-right">
              Journalism Without Fear or Favour
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;