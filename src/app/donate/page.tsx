'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Upload } from 'lucide-react';
import Image from 'next/image';

export default function DonatePage() {
  const { toast } = useToast();
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useState<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to a server.
    toast({
      title: 'Food item listed!',
      description: 'Thank you for your donation. Collectors will now be able to see your listing.',
    });
  };

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-secondary">
        <div className="container py-16 md:py-24">
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">List Your Surplus Food</CardTitle>
              <CardDescription>
                Fill out the details below to make your food items available for donation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div
                  className="relative flex justify-center items-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {preview ? (
                    <Image src={preview} alt="Food preview" layout="fill" objectFit="contain" className="rounded-lg" />
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <Upload className="mx-auto h-10 w-10" />
                      <p>Upload a photo of the food</p>
                    </div>
                  )}
                  <Input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="foodName">Food Type</Label>
                  <Input id="foodName" type="text" placeholder="e.g., Bread, Vegetable Curry" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input id="quantity" type="text" placeholder="e.g., 2 loaves, 5 portions" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pickup-address">Pickup Address</Label>
                  <Textarea id="pickup-address" placeholder="Enter the full address for pickup" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date / Best Before</Label>
                  <Input id="expiry" type="datetime-local" required />
                </div>
                <Button type="submit" className="w-full">
                  List Food for Donation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
