import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Map } from '@/components/map';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const locations = [
    // Donors
    { top: "15%", left: "20%", name: "City Center Hotel", type: 'donor' as const, details: "8 meals available" },
    { top: "40%", left: "30%", name: "The Grand Bakery", type: 'donor' as const, details: "2 dozen pastries" },
    { top: "70%", left: "15%", name: "Metro Grocers", type: 'donor' as const, details: "Surplus vegetables" },
    { top: "30%", left: "65%", name: "Healthy Eats Cafe", type: 'donor' as const, details: "5 portions of soup" },
    { top: "80%", left: "55%", name: "Campus Dining Hall", type: 'donor' as const, details: "20 meals available" },
    { top: "55%", left: "50%", name: "Corner Bistro", type: 'donor' as const, details: "Leftover pasta dishes" },
    { top: "25%", left: "80%", name: "Sushi Place", type: 'donor' as const, details: "Sushi rolls" },
    
    // Receivers
    { top: "25%", left: "45%", name: "Community Shelter", type: 'receiver' as const, details: "Needs 15 meals" },
    { top: "50%", left: "75%", name: "NGO Food Bank", type: 'receiver' as const, details: "Accepting all donations" },
    { top: "75%", left: "30%", name: "St. Mary's Soup Kitchen", type: 'receiver' as const, details: "Needs 30 meals" },
    { top: "60%", left: "85%", name: "Local Youth Center", type: 'receiver' as const, details: "Needs snacks & drinks" },
    { top: "85%", left: "80%", name: "Downtown Drop-in Center", type: 'receiver' as const, details: "Needs 12 meals" },
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
