import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Clock, Heart, UtensilsCrossed } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Food Log & Expiry Reminders",
    description: "Easily track your food items and their expiry dates. Get smart reminders so you use them before they go bad.",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
    title: "Smart Meal Planning & Recipes",
    description: "Discover delicious recipes based on the ingredients you already have. Our AI helps you create meal plans to minimize waste.",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Food Donation & Sharing",
    description: "Have surplus food? Connect with your community to share with neighbors or donate to local charities effortlessly.",
  },
  {
    icon: <Bell className="w-8 h-8 text-primary" />,
    title: "AI Shelf Life Assistant",
    description: "Unsure how long something lasts? Ask our AI assistant for storage tips and shelf life information to keep food fresh longer.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">A smarter way to manage your food</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            SaveBite is packed with features to help you save money and the environment.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-semibold mb-2">{feature.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
