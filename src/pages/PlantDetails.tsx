import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { plantsDatabase, Plant } from "../data/plantsData";

const PlantDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // plantId should be number, safely parse it
  const plantId = (location.state as { plantId?: number })?.plantId;

  const plant: Plant | undefined = plantsDatabase.find((p) => p.id === plantId);

  if (!plant) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Plant not found</h2>
          <Button onClick={() => navigate("/dashboard")} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/dashboard">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">{plant.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {plant.image && (
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full max-h-96 object-contain rounded-md"
              />
            )}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Description</h3>
              <p>{plant.description}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Care Instructions</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Light:</strong> {plant.care.light}</li>
                <li><strong>Water:</strong> {plant.care.water}</li>
                <li><strong>Soil:</strong> {plant.care.soil}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlantDetails;


