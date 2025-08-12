import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  TrendingUp,
  Trophy,
  Users,
  Calendar,
  Bell,
  Plus,
  Leaf,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header";
import { Link, useLocation } from "react-router-dom";

// Helper to format dates nicely
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
};

// Helper to get just the yyyy-mm-dd part for grouping
const getDateKey = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toISOString().split("T")[0]; // e.g. "2025-08-09"
};

const Dashboard = () => {
  const location = useLocation();
  const [profileName, setProfileName] = useState<string | null>(null);

  // For calendar toggle and selected date scans
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem("profileName");
    if (storedName) {
      setProfileName(storedName);
    } else {
      setProfileName(null);
    }
  }, [location]);

  // Example recent scans with full date strings (ISO or JS date string)
  const recentScans = [
    { id: 1, plant: "Tomato Plant", date: new Date(Date.now() - 2 * 3600 * 1000).toISOString(), status: "healthy", confidence: 94 }, // 2 hours ago
    { id: 2, plant: "Rose Bush", date: new Date(Date.now() - 24 * 3600 * 1000).toISOString(), status: "needs-attention", confidence: 87 }, // 1 day ago
    { id: 3, plant: "Basil", date: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(), status: "healthy", confidence: 91 }, // 3 days ago
  ];

  const achievements = [
    { name: "First Scan", description: "Completed your first plant scan", unlocked: true },
    { name: "Green Thumb", description: "Maintained 5 healthy plants", unlocked: true },
    { name: "Master Diagnostician", description: "Performed 50 plant scans", unlocked: false },
  ];

  // Group scans by dateKey for calendar display
  const scansByDate: Record<string, typeof recentScans> = recentScans.reduce((acc, scan) => {
    const key = getDateKey(scan.date);
    if (!acc[key]) acc[key] = [];
    acc[key].push(scan);
    return acc;
  }, {} as Record<string, typeof recentScans>);

  // Unique dates for calendar list
  const uniqueDates = Object.keys(scansByDate).sort((a, b) => (a > b ? -1 : 1));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back,{" "}
            {profileName ? (
              <Link
                to="/profile"
                className="text-green-600 hover:underline cursor-pointer"
                title="Edit your profile"
              >
                {profileName}
              </Link>
            ) : (
              "Gardener"
            )}
            !
          </h1>
          <p className="text-gray-600">Here's what's happening in your garden today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-green-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Plants</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Scans This Week</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Camera className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Garden Score</p>
                  <p className="text-2xl font-bold text-gray-900">847</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Trophy className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Health Score</p>
                  <p className="text-2xl font-bold text-gray-900">92%</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Scans */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Plant Scans</CardTitle>
                  <CardDescription>Your latest plant health diagnostics</CardDescription>
                </div>
                <Link to="/scan">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600">
                    <Plus className="h-4 w-4 mr-2" />
                    New Scan
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentScans.map((scan) => (
                    <div
                      key={scan.id}
                      className="flex items-center justify-between p-4 border border-gray-100 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-2 rounded-lg ${
                            scan.status === "healthy" ? "bg-green-100" : "bg-yellow-100"
                          }`}
                        >
                          {scan.status === "healthy" ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <AlertTriangle className="h-5 w-5 text-yellow-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{scan.plant}</p>
                          <p className="text-sm text-gray-500">{formatDate(scan.date)}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={scan.status === "healthy" ? "default" : "secondary"}
                          className={
                            scan.status === "healthy"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {scan.confidence}% confident
                        </Badge>
                      </div>
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
                <Link to="/scan">
                  <Button className="w-full justify-start bg-gradient-to-r from-green-500 to-emerald-600">
                    <Camera className="h-4 w-4 mr-2" />
                    Scan Plant
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    setShowCalendar(!showCalendar);
                    setSelectedDate(null);
                  }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  View Calendar
                </Button>

                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Community
                </Button>

                <Link to="/profile">
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    Go to Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Your gardening milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <React.Fragment key={index}>
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-lg ${
                            achievement.unlocked ? "bg-yellow-100" : "bg-gray-100"
                          }`}
                        >
                          <Trophy
                            className={`h-4 w-4 ${
                              achievement.unlocked ? "text-yellow-600" : "text-gray-400"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <p
                            className={`text-sm font-medium ${
                              achievement.unlocked ? "text-gray-900" : "text-gray-500"
                            }`}
                          >
                            {achievement.name}
                          </p>
                          <p className="text-xs text-gray-500">{achievement.description}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Garden Progress */}
            <Card>
              <CardHeader>
                <CardTitle>This Week's Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Scan Goal</span>
                      <span>8/10</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Plant Health</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Calendar Modal / Section */}
        {showCalendar && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Scan Calendar</h3>
                <button
                  onClick={() => {
                    setShowCalendar(false);
                    setSelectedDate(null);
                  }}
                  className="text-gray-600 hover:text-gray-900 font-bold"
                  aria-label="Close calendar"
                >
                  ✕
                </button>
              </div>

              {/* Date list */}
              <ul className="divide-y divide-gray-200 max-h-64 overflow-auto">
                {uniqueDates.length === 0 && (
                  <li className="py-2 text-center text-gray-500">No scans available</li>
                )}
                {uniqueDates.map((dateKey) => (
                  <li
                    key={dateKey}
                    className={`cursor-pointer py-2 px-4 rounded ${
                      selectedDate === dateKey ? "bg-green-100 font-semibold" : "hover:bg-green-50"
                    }`}
                    onClick={() => setSelectedDate(dateKey)}
                  >
                    {new Date(dateKey).toLocaleDateString(undefined, {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </li>
                ))}
              </ul>

              {/* Show scans for selected date */}
              {selectedDate && (
                <div className="mt-4 border-t pt-4">
                  <h4 className="font-semibold mb-2">Scans on {new Date(selectedDate).toLocaleDateString()}</h4>
                  <ul>
                    {scansByDate[selectedDate]?.map((scan) => (
                      <li key={scan.id} className="mb-2">
                        <p className="font-medium">{scan.plant}</p>
                        <p className="text-sm text-gray-600">
                          Confidence: {scan.confidence}%, Status: {scan.status}
                        </p>
                      </li>
                    )) || <p>No scans on this date.</p>}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
