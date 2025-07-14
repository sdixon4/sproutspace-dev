
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Upload, 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  Info,
  ArrowLeft,
  Smartphone,
  Wifi
} from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const PlantScan = () => {
  const [scanStep, setScanStep] = useState<'upload' | 'analyzing' | 'results'>('upload');
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      toast.success("Image selected successfully!");
    }
  };

  const handleScan = () => {
    if (!selectedFile) {
      toast.error("Please select an image first!");
      return;
    }

    setScanStep('analyzing');
    setProgress(0);

    // Simulate AI analysis
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanStep('results');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const scanResults = {
    plantType: "Tomato Plant (Solanum lycopersicum)",
    healthStatus: "Nutrient Deficiency Detected",
    confidence: 87,
    issues: [
      {
        type: "Nitrogen Deficiency",
        severity: "Moderate",
        description: "Yellowing of lower leaves indicates nitrogen deficiency",
        confidence: 89
      }
    ],
    recommendations: [
      "Apply nitrogen-rich fertilizer (10-5-5 NPK ratio)",
      "Water deeply but less frequently",
      "Monitor leaf color changes over next 7-10 days",
      "Consider soil pH testing"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/dashboard">
            <Button variant="outline" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Plant Health Scanner</h1>
            <p className="text-gray-600">AI-powered plant diagnostics at your fingertips</p>
          </div>
        </div>

        {scanStep === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Upload Plant Image</CardTitle>
                <CardDescription>
                  Take or upload a clear photo of your plant for AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors">
                  <div className="space-y-4">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <Camera className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Upload Your Plant Photo</h3>
                      <p className="text-gray-600 mb-4">
                        Drag and drop your image here, or click to browse
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload">
                        <Button variant="outline" className="cursor-pointer">
                          <Upload className="h-4 w-4 mr-2" />
                          Choose File
                        </Button>
                      </label>
                    </div>
                    {selectedFile && (
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-green-800">
                          Selected: {selectedFile.name}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <Info className="h-4 w-4 mr-2" />
                    Tips for Best Results
                  </h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Use natural lighting when possible</li>
                    <li>• Focus on affected areas of the plant</li>
                    <li>• Include leaves, stems, or problem areas clearly</li>
                    <li>• Avoid blurry or overly distant shots</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button 
                    onClick={handleScan}
                    disabled={!selectedFile}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Analyze Plant
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Wifi className="h-4 w-4 mr-2" />
                    Connect Sensor
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card className="border-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Mobile Camera</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Use your smartphone camera for instant scanning
                  </p>
                  <Button variant="outline" className="w-full">
                    Open Camera
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-purple-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Wifi className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">External Sensors</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Connect Bluetooth sensors for advanced analysis
                  </p>
                  <Button variant="outline" className="w-full">
                    Pair Device
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {scanStep === 'analyzing' && (
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Analyzing Your Plant</h3>
                <p className="text-gray-600 mb-6">
                  Our AI is processing your image and running diagnostic algorithms...
                </p>
                <Progress value={progress} className="mb-4" />
                <p className="text-sm text-gray-500">{progress}% Complete</p>
              </CardContent>
            </Card>
          </div>
        )}

        {scanStep === 'results' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Results */}
              <div className="lg:col-span-2 space-y-6">
                {/* Plant Identification */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Plant Identification</CardTitle>
                      <Badge className="bg-green-100 text-green-800">
                        {scanResults.confidence}% Confident
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium text-gray-900 mb-4">
                      {scanResults.plantType}
                    </p>
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      <span className="font-medium text-yellow-700">{scanResults.healthStatus}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Detected Issues */}
                <Card>
                  <CardHeader>
                    <CardTitle>Detected Issues</CardTitle>
                    <CardDescription>Problems identified by our AI analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {scanResults.issues.map((issue, index) => (
                      <div key={index} className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-yellow-900">{issue.type}</h4>
                          <div className="flex space-x-2">
                            <Badge variant="outline" className="border-yellow-300 text-yellow-700">
                              {issue.severity}
                            </Badge>
                            <Badge className="bg-yellow-100 text-yellow-800">
                              {issue.confidence}% confident
                            </Badge>
                          </div>
                        </div>
                        <p className="text-yellow-800">{issue.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle>Treatment Recommendations</CardTitle>
                    <CardDescription>Actionable steps to improve plant health</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {scanResults.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline">
                      Save to Garden
                    </Button>
                    <Button className="w-full" variant="outline">
                      Set Reminders
                    </Button>
                    <Button className="w-full" variant="outline">
                      Share Results
                    </Button>
                    <Button 
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600"
                      onClick={() => setScanStep('upload')}
                    >
                      Scan Another Plant
                    </Button>
                  </CardContent>
                </Card>

                {/* Scan History */}
                <Card>
                  <CardHeader>
                    <CardTitle>Related Scans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm">
                        <p className="font-medium">Tomato Plant #1</p>
                        <p className="text-gray-500">3 days ago - Healthy</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">Tomato Plant #2</p>
                        <p className="text-gray-500">1 week ago - Pest detected</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantScan;
