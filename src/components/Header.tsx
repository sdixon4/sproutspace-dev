import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";
import { auth } from "@/firebaseConfig"; // your firebaseConfig file
import { onAuthStateChanged, signOut, User } from "firebase/auth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-xl">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">SproutSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-gray-600 hover:text-green-600 transition-colors">
              Features
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <>
                <Link to="/signin">
                  <Button variant="ghost" className="text-gray-600 hover:text-green-600">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                    Get Started
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <span className="text-gray-700 font-medium">
                  {user.displayName || user.email?.split("@")[0]}
                </span>
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-green-100 pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link to="/features" className="text-gray-600 hover:text-green-600 transition-colors">
                Features
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
                Contact
              </Link>

              {!user ? (
                <div className="flex flex-col space-y-2 pt-4">
                  <Link to="/signin">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600">
                      Get Started
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-4">
                  <span className="text-gray-700 font-medium px-4">
                    {user.displayName || user.email?.split("@")[0]}
                  </span>
                  <Button
                    variant="outline"
                    className="w-full text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
