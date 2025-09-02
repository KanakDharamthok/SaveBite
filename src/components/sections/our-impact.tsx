import { Card, CardContent } from "@/components/ui/card";
import { HandHeart, Leaf, Users, Clock } from "lucide-react";

const impactStats = [
  {
    icon: <HandHeart className="w-8 h-8 text-primary" />,
    value: "25,000+",
    label: "Meals Served",
  },
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    value: "15,000+ kg",
    label: "Food Saved",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    value: "2,500+",
    label: "Active Donors & Collectors",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    value: "30 mins",
    label: "Avg. Pickup Time",
  },
]

export function OurImpact() {
  return (
    <section id="our-impact" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Together, we are making a significant difference. Here's a look at what our community has achieved.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center p-6">
                <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        {stat.icon}
                    </div>
                </div>
                <CardContent className="p-0">
                    <p className="font-headline text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
