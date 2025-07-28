import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

// Footer component as provided
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
              {/* Replace these with your real social links if available */}
              <Link to="#" aria-label="Facebook">
                <svg className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a10 10 0 0010 10v-7h-3v-3h3v-2.2c0-3 1.792-4.6 4.4-4.6 1.28 0 2.6.2 2.6.2v3h-1.6c-1.6 0-2.1 1-2.1 2v2.2h3.6l-.6 3H14v7a10 10 0 008-10z"/></svg>
              </Link>
              <Link to="#" aria-label="Twitter">
                <svg className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4.37a9.05 9.05 0 01-2.88 1.1A4.52 4.52 0 0016.07 0c-2.5 0-4.5 2.03-4.5 4.53 0 .36.04.7.11 1.04C7.69 5.27 4.07 3.5 1.64.57A4.47 4.47 0 00.85 2.3c0 1.57.8 2.95 2.02 3.76A4.47 4.47 0 01.89 5.9v.06c0 2.25 1.6 4.12 3.73 4.55a4.54 4.54 0 01-2.04.08 4.52 4.52 0 004.21 3.14A9.06 9.06 0 010 19.54 12.8 12.8 0 006.92 21c8.3 0 12.83-6.87 12.83-12.83 0-.2 0-.4-.02-.6A9.18 9.18 0 0023 3z"/></svg>
              </Link>
              <Link to="#" aria-label="Instagram">
                <svg className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm8 2a1 1 0 100 2 1 1 0 000-2zm-5 2a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"/></svg>
              </Link>
              <Link to="#" aria-label="Email">
                <svg className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 6.75v10.5a2.25 2.25 0 002.25 2.25h16.5a2.25 2.25 0 002.25-2.25V6.75m-21 0l9 6 9-6"/></svg>
              </Link>
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

export default function Settings() {
  const [receiveEmails, setReceiveEmails] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoRenew, setAutoRenew] = useState(true);

  return (
    <>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">SproutSpace</span>
            </Link>

            {/* Buttons */}
            <div className="flex space-x-4">
              <Link to="/dashboard">
                <Button size="sm" variant="outline">
                  Back to Dashboard
                </Button>
              </Link>
              <Link to="/profile">
                <Button size="sm" variant="outline">
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Settings Content */}
      <div className="max-w-xl mx-auto my-10 p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Settings</h2>
        <Card>
          <CardContent className="space-y-6 py-6">
            <div className="flex items-center justify-between">
              <Label>Receive Email Notifications</Label>
              <Switch checked={receiveEmails} onCheckedChange={setReceiveEmails} />
            </div>

            <div className="flex items-center justify-between">
              <Label>Dark Mode</Label>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>

            <div className="flex items-center justify-between">
              <Label>Auto-Renew Subscription</Label>
              <Switch checked={autoRenew} onCheckedChange={setAutoRenew} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}


