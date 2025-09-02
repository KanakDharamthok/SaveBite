'use client'

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Map } from '@/components/map';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const locations = [
    // Donors (Mumbai area)
    { top: "19.0760", left: "72.8777", name: "City Center Hotel", type: 'donor' as const, details: "8 meals available" },
    { top: "19.0822", left: "72.8812", name: "The Grand Bakery", type: 'donor' as const, details: "2 dozen pastries" },
    { top: "19.0650", left: "72.8750", name: "Metro Grocers", type: 'donor' as const, details: "Surplus vegetables" },

    // Donors (Delhi area)
    { top: "28.6139", left: "77.2090", name: "Healthy Eats Cafe", type: 'donor' as const, details: "5 portions of soup" },
    { top: "28.6562", left: "77.2410", name: "Campus Dining Hall", type: 'donor' as const, details: "20 meals available" },
    
    // Donors (Bangalore area)
    { top: "12.9716", left: "77.5946", name: "Corner Bistro", type: 'donor' as const, details: "Leftover pasta dishes" },
    { top: "12.9784", left: "77.6408", name: "Sushi Place", type: 'donor' as const, details: "Sushi rolls" },
    
    // Receivers (Mumbai area)
    { top: "19.0780", left: "72.8850", name: "Community Shelter", type: 'receiver' as const, details: "Needs 15 meals" },

    // Receivers (Delhi area)
    { top: "28.6304", left: "77.2177", name: "NGO Food Bank", type: 'receiver' as const, details: "Accepting all donations" },
    { top: "28.5900", left: "77.2100", name: "St. Mary's Soup Kitchen", type: 'receiver' as const, details: "Needs 30 meals" },

    // Receivers (Bangalore area)
    { top: "12.9698", left: "77.6393", name: "Local Youth Center", type: 'receiver' as const, details: "Needs snacks & drinks" },
    { top: "12.9545", left: "77.6224", name: "Downtown Drop-in Center", type: 'receiver' as const, details: "Needs 12 meals" },
];


export default function MapPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-secondary">
        <div className="container py-16 md:py-24">
          <Card className="max-w-6xl mx-auto shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-headline">Live Donations Map</CardTitle>
              <CardDescription className="md:text-lg">
                Blue pins represent active donors, and green pins represent collectors.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden border">
                <Map locations={locations} />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
