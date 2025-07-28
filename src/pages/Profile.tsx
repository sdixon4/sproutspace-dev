import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Leaf } from "lucide-react";

// Footer component reused here
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

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
              <Link to="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              </Link>
              <Link to="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              </Link>
              <Link to="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              </Link>
              <Link to="#" aria-label="Email">
                <Mail className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
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

export default function Profile() {
  const navigate = useNavigate();

  // Mock user state (editable)
  const [user, setUser] = useState({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    dob: "1995-08-14",
    card: "**** **** **** 1234",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditMode(false);
    // Save full name to localStorage for dashboard welcome
    const fullName = `${user.firstName} ${user.lastName}`.trim();
    localStorage.setItem("profileName", fullName);

    // Future: submit to backend
    console.log("Saved user:", user);
  };

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-16 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Back to Home button */}
              <div className="text-left mb-6">
                <button
                  onClick={() => navigate("/")}
                  className="inline-flex items-center text-sm font-medium text-green-700 hover:text-green-900"
                >
                  ← Back to Home
                </button>
              </div>

              {/* Badge with Leaf icon and text */}
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto">
                <Leaf className="h-4 w-4 mr-2" />
                User Profile Management
              </div>

              {/* Page Heading */}
              <h1 className="text-4xl font-extrabold tracking-tight text-green-900 mb-8">
                Manage Your Profile
              </h1>
            </div>
          </div>
        </section>

        {/* Profile form card */}
        <div className="max-w-xl mx-auto my-10 p-4">
          <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
          <Card>
            <CardContent className="space-y-4 py-6">
              <div>
                <label>First Name</label>
                <Input
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>
              <div>
                <label>Last Name</label>
                <Input
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>
              <div>
                <label>Email Address</label>
                <Input
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>
              <div>
                <label>Date of Birth</label>
                <Input
                  name="dob"
                  value={user.dob}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>
              <div>
                <label>Debit Card</label>
                <Input
                  name="card"
                  value={user.card}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>
              <div className="flex flex-wrap gap-4 pt-4 justify-between">
                {editMode ? (
                  <Button onClick={handleSave}>Save</Button>
                ) : (
                  <Button onClick={() => setEditMode(true)}>Edit Profile</Button>
                )}
                <Button variant="destructive">Cancel Subscription</Button>
                <Button onClick={() => navigate("/settings")}>Settings</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

