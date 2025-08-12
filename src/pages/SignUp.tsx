import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "@/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const initializeUserDashboard = async (userId: string) => {
    await setDoc(doc(db, "users", userId), {
      totalPlants: 0,
      scansThisWeek: 0,
      gardenScore: 0,
      healthScore: 100,
      recentScans: [],
      achievements: [
        { name: "First Scan", unlocked: false, description: "Completed your first plant scan" },
        { name: "Green Thumb", unlocked: false, description: "Maintained 5 healthy plants" },
        { name: "Master Diagnostician", unlocked: false, description: "Performed 50 plant scans" },
      ],
      scanGoal: 10,
      plantHealth: 100,
      createdAt: new Date().toISOString(),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create user with email/password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update display name if provided
      if (displayName.trim()) {
        await updateProfile(user, { displayName: displayName.trim() });
      }

      // Initialize dashboard data in Firestore
      await initializeUserDashboard(user.uid);

      toast.success("Account created! Welcome to SproutSpace.");
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-green-100 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create Your Account</CardTitle>
            <CardDescription className="text-center">
              Sign up to start your gardening journey with SproutSpace.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name (optional)</Label>
                <Input
                  id="displayName"
                  type="text"
                  placeholder="Your name or nickname"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="border-green-200 focus:border-green-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-green-200 focus:border-green-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-green-200 focus:border-green-500"
                  required
                  minLength={6}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Sign Up"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;


