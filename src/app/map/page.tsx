import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Map } from '@/components/map';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const locations = [
    // Donors
    { top: "15%", left: "20%", name: "City Center Hotel", type: 'donor' as const },
    { top: "40%", left: "30%", name: "The Grand Bakery", type: 'donor' as const },
    { top: "70%", left: "15%", name: "Metro Grocers", type: 'donor' as const },
    { top: "30%", left: "65%", name: "Healthy Eats Cafe", type: 'donor' as const },
    { top: "80%", left: "55%", name: "Campus Dining Hall", type: 'donor' as const },
    { top: "55%", left: "50%", name: "Corner Bistro", type: 'donor' as const },
    { top: "25%", left: "80%", name: "Sushi Place", type: 'donor' as const },
    
    // Receivers
    { top: "25%", left: "45%", name: "Community Shelter", type: 'receiver' as const },
    { top: "50%", left: "75%", name: "NGO Food Bank", type: 'receiver' as const },
    { top: "75%", left: "30%", name: "St. Mary's Soup Kitchen", type: 'receiver' as const },
    { top: "60%", left: "85%", name: "Local Youth Center", type: 'receiver' as const },
    { top: "85%", left: "80%", name: "Downtown Drop-in Center", type: 'receiver' as const },
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
