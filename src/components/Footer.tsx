
import { Link } from "react-router-dom";
import { Leaf, Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">SproutSpace</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              AI-powered plant health diagnostics for home gardeners. Transform your gardening 
              experience with intelligent plant care insights and actionable recommendations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-300 hover:text-green-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-green-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/scan" className="text-gray-300 hover:text-green-400 transition-colors">
                  Plant Scanner
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-300 hover:text-green-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SproutSpace. All rights reserved. Made with 💚 for gardeners everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
