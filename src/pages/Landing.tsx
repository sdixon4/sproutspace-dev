
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Camera, 
  Brain, 
  Trophy, 
  Users, 
  Smartphone, 
  CheckCircle, 
  ArrowRight,
  Leaf,
  Zap,
  Shield
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Leaf className="h-4 w-4 mr-2" />
                AI-Powered Plant Care Revolution
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Garden with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  {" "}AI Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                SproutSpace leverages cutting-edge AI-powered multispectral imaging to help home gardeners 
                diagnose plant health issues instantly and receive actionable recommendations tailored to your garden.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-lg px-8 py-4">
                  Start Gardening Smarter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-green-200 hover:bg-green-50">
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Diagnostic Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
                <div className="text-gray-600">Happy Gardeners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Plant Species</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intelligent Plant Care Made Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform combines advanced imaging technology with expert gardening knowledge 
              to give you the insights you need for a thriving garden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Camera className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Scanning</h3>
                <p className="text-gray-600 mb-4">
                  Simply snap a photo of your plant with your smartphone. Our AI analyzes multispectral 
                  data to identify health issues with remarkable accuracy.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Instant diagnosis
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Recommendations</h3>
                <p className="text-gray-600 mb-4">
                  Get personalized, actionable advice tailored to your specific plants, location, 
                  and gardening experience level.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Tailored solutions
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Trophy className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Gamified Experience</h3>
                <p className="text-gray-600 mb-4">
                  Earn points, unlock achievements, and compete with fellow gardeners in seasonal 
                  challenges and community leaderboards.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Engaging rewards
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Support</h3>
                <p className="text-gray-600 mb-4">
                  Connect with a vibrant community of gardeners, share experiences, and learn 
                  from expert advice and peer support.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Expert network
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mobile-First Design</h3>
                <p className="text-gray-600 mb-4">
                  Optimized for mobile use with intuitive interfaces that make plant care 
                  accessible anywhere in your garden.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Always accessible
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Advanced Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Track your garden's progress over time with detailed analytics and insights 
                  to optimize your plant care strategies.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Data-driven care
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How SproutSpace Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to healthier plants and a thriving garden
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Scan Your Plant</h3>
              <p className="text-gray-600">
                Take a photo of your plant using your smartphone camera or connect external sensors 
                for more detailed analysis.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI processes the image to identify potential issues like nutrient 
                deficiencies, pests, or diseases.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized, actionable advice and treatment plans to help your plants 
                thrive and prevent future issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of gardeners who are already growing healthier plants with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
                Start Free Trial
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
