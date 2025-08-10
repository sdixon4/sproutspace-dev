import '@tensorflow/tfjs';
import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";  // <-- Added TensorFlow import
import * as mobilenet from "@tensorflow-models/mobilenet";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Camera,
  Zap,
  Info,
  ArrowLeft,
  Smartphone,
  Wifi,
} from "lucide-react";
import Header from "@/components/Header";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Fuse from "fuse.js";
import { plantsDatabase } from "../data/plantsData";

const PlantScan = () => {
  const [scanStep, setScanStep] = useState<"upload" | "analyzing" | "results">("upload");
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
  const [scanResults, setScanResults] = useState<any>(null);

  const navigate = useNavigate();

  // Load mobilenet model once on mount, with error logging
  useEffect(() => {
    mobilenet
      .load()
      .then((loadedModel) => {
        setModel(loadedModel);
        console.log("MobileNet model loaded");
      })
      .catch((error) => {
        console.error("Failed to load ML model:", error);
        toast.error("Failed to load ML model.");
      });
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      toast.success("Image selected successfully!");
    }
  };

  // Fuse.js setup for fuzzy searching plant names and aliases
  const fuse = new Fuse(plantsDatabase, {
    keys: ["name", "aliases"],
    threshold: 0.4,
  });

  const analyzeImage = async (imageElement: HTMLImageElement) => {
    if (!model) {
      toast.error("Model is not loaded yet.");
      setScanStep("upload");
      return;
    }
    try {
      console.log("Starting image classification...");
      const predictions = await model.classify(imageElement);
      console.log("Predictions:", predictions);

      if (predictions.length === 0) {
        toast.error("No objects recognized in the image.");
        setScanStep("upload");
        return;
      }

      const topLabel = predictions[0].className.toLowerCase();

      const results = fuse.search(topLabel);

      if (results.length === 0) {
        toast.error("Plant not recognized. Try a different photo.");
        setScanStep("upload");
        return;
      }

      const matchedPlant = results[0].item;

      setScanResults({
        plant: matchedPlant,
        confidence: Math.round(predictions[0].probability * 100),
        predictionLabel: predictions[0].className,
      });

      setScanStep("results");
    } catch (error) {
      console.error("Error during image analysis:", error);
      toast.error("Error analyzing image.");
      setScanStep("upload");
    }
  };

  const handleScan = () => {
    console.log("Analyze Plant clicked");

    if (!selectedFile) {
      console.log("No file selected");
      toast.error("Please select an image first!");
      return;
    }
    if (!model) {
      console.log("Model not loaded yet");
      toast.error("Model is not loaded yet.");
      return;
    }

    setScanStep("analyzing");
    setProgress(0);

    const imageURL = URL.createObjectURL(selectedFile);
    const img = new Image();

    img.onload = () => {
      console.log("Image loaded successfully, starting progress");
      let progressVal = 0;

      const interval = setInterval(() => {
        progressVal += 10;
        console.log("Progress:", progressVal);
        setProgress(progressVal);

        if (progressVal >= 100) {
          clearInterval(interval);
          console.log("Progress complete, analyzing image now");
          setTimeout(() => analyzeImage(img), 100);
          URL.revokeObjectURL(imageURL);
        }
      }, 200);
    };

    img.onerror = (error) => {
      console.error("Image failed to load", error);
      toast.error("Failed to load image.");
      setScanStep("upload");
      URL.revokeObjectURL(imageURL);
    };

    img.src = imageURL;
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

        {scanStep === "upload" && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Upload Plant Image</CardTitle>
                <CardDescription>
                  Take or upload a clear photo of your plant for AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload area label (clickable) */}
                <label
                  htmlFor="file-upload"
                  className="block cursor-pointer border-2 border-dashed border-green-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <Camera className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Upload Your Plant Photo</h3>
                      <p className="text-gray-600 mb-4">
                        Drag and drop your image here, or click anywhere to browse
                      </p>
                    </div>
                    {selectedFile && (
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-green-800">Selected: {selectedFile.name}</p>
                      </div>
                    )}
                  </div>
                </label>

                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />

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
                  <Button variant="outline" className="w-full" disabled>
                    Open Camera (Coming Soon)
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
                  <Button variant="outline" className="w-full" disabled>
                    Pair Device (Coming Soon)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {scanStep === "analyzing" && (
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

        {scanStep === "results" && scanResults && (
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent>
                <h2 className="text-2xl font-bold mb-4">Plant Recognized</h2>
                <p className="text-lg mb-2">
                  <strong>Name:</strong> {scanResults.plant.name}
                </p>
                <p className="mb-4 italic text-gray-600">
                  (Model Prediction: {scanResults.predictionLabel}, Confidence: {scanResults.confidence}%)
                </p>
                <img
                  src={scanResults.plant.image}
                  alt={scanResults.plant.name}
                  className="max-w-md rounded-lg mb-6 shadow-lg"
                />
                <p className="mb-4">{scanResults.plant.description}</p>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-xl font-semibold mb-3">Care Instructions</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <strong>Light:</strong> {scanResults.plant.care.light}
                    </li>
                    <li>
                      <strong>Water:</strong> {scanResults.plant.care.water}
                    </li>
                    <li>
                      <strong>Soil:</strong> {scanResults.plant.care.soil}
                    </li>
                  </ul>
                </div>
                <div className="flex space-x-4">
                  <Button
                    onClick={() => {
                      setScanStep("upload");
                      setSelectedFile(null);
                      setScanResults(null);
                    }}
                  >
                    Scan Another Plant
                  </Button>
                  <Button
                    onClick={() =>
                      navigate("/plantdetails", {
                        state: { plantId: scanResults.plant.id },
                      })
                    }
                  >
                    View Full Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantScan;
