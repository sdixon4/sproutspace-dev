// src/pages/Working.tsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import * as mobilenet from "@tensorflow-models/mobilenet";
import Fuse from "fuse.js";
import { plantsDatabase } from "../data/plantsData";
import { Button } from "@/components/ui/button";

const Working = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fuse = new Fuse(plantsDatabase, {
    keys: ["name", "aliases"],
    threshold: 0.4,
  });

  useEffect(() => {
    const imageURL = location.state?.imageURL;
    if (!imageURL) {
      setError("No image provided.");
      setLoading(false);
      return;
    }

    const analyze = async () => {
      try {
        const model = await mobilenet.load();
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = imageURL;

        img.onload = async () => {
          const predictions = await model.classify(img);

          if (predictions.length === 0) {
            setError("No objects recognized in the image.");
            setLoading(false);
            return;
          }

          const topLabel = predictions[0].className.toLowerCase();
          const results = fuse.search(topLabel);

          if (results.length === 0) {
            setError("Plant not recognized. Try a different photo.");
            setLoading(false);
            return;
          }

          const matchedPlant = results[0].item;

          // Redirect to PlantDetails with plantId
          navigate("/plantdetails", { state: { plantId: matchedPlant.id } });
        };

        img.onerror = () => {
          setError("Failed to load image.");
          setLoading(false);
        };
      } catch (e) {
        setError("Failed to load model or analyze image.");
        setLoading(false);
      }
    };

    analyze();
  }, [location.state, navigate, fuse]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Working...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-2xl text-red-600 font-semibold">{error}</h1>
      <Link to="/scan">
        <Button>Back to Scan</Button>
      </Link>
    </div>
  );
};

export default Working;

