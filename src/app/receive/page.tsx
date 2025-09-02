'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import { Clock, MapPin, Users } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';

// Mock data for available food items
const mockFoodItems = [
  {
    id: 1,
    name: "Leftover Pizza and Salad",
    donor: "City Center Hotel",
    pickupAddress: "123 Main St, Anytown, USA",
    pickupTime: "Today, by 8:00 PM",
    quantity: "3 large pizzas, 1 large bowl of salad",
    image: "https://picsum.photos/600/400?random=1",
    aiHint: "pizza salad"
  },
  {
    id: 2,
    name: "Morning Pastries",
    donor: "The Grand Bakery",
    pickupAddress: "456 Oak Ave, Anytown, USA",
    pickupTime: "Today, by 12:00 PM",
    quantity: "Approx. 2 dozen mixed pastries",
    image: "https://picsum.photos/600/400?random=2",
    aiHint: "pastries breakfast"
  },
  {
    id: 3,
    name: "Vegetable Soup",
    donor: "Healthy Eats Cafe",
    pickupAddress: "789 Pine Ln, Anytown, USA",
    pickupTime: "Today, by 9:00 PM",
    quantity: "1 large pot (approx. 10-12 servings)",
    image: "https://picsum.photos/600/400?random=3",
    aiHint: "vegetable soup"
  },
];

export default function ReceivePage() {
  const { toast } = useToast();
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Successful!",
      description: `Your reservation for ${selectedItem?.name} has been sent to ${selectedItem?.donor}. Please collect it from the specified address.`,
    });
  };

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-secondary">
        <div className="container py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Available Food Near You</h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Browse available food donations from local hotels and businesses. Reserve items for pickup as a collector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockFoodItems.map((item) => (
              <Card key={item.id} className="flex flex-col shadow-lg">
                <CardHeader className="p-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover w-full aspect-video"
                    data-ai-hint={item.aiHint}
                  />
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="text-xl mb-2">{item.name}</CardTitle>
                  <CardDescription className="font-semibold text-primary">{item.donor}</CardDescription>
                  <div className="space-y-3 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Serves: {item.quantity}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{item.pickupAddress}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Collect by: {item.pickupTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                   <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="w-full" onClick={() => setSelectedItem(item)}>Reserve Now</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <form onSubmit={handleReserveSubmit}>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Reserve: {selectedItem?.name}</AlertDialogTitle>
                          <AlertDialogDescription>
                            Please provide your details to reserve this food item from {selectedItem?.donor}.
                            A notification will be sent to them.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <div className="space-y-4 my-4">
                           <div className="space-y-2">
                            <Label htmlFor="name">Your Name</Label>
                            <Input id="name" type="text" placeholder="John Doe" required />
                          </div>
                           <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="org">Organization (Optional)</Label>
                            <Input id="org" type="text" placeholder="e.g., Community Food Bank" />
                          </div>
                        </div>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction type="submit">Confirm Reservation</AlertDialogAction>
                        </AlertDialogFooter>
                      </form>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
