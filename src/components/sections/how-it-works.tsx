import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScanLine, SmartphoneNfc, Leaf, HandHeart, Users } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: <ScanLine className="w-10 h-10 text-primary" />,
    title: "Log or Scan Food",
    description: "Easily log the surplus food items you have available for donation.",
  },
  {
    step: 2,
    icon: <HandHeart className="w-10 h-10 text-primary" />,
    title: "List Your Donation",
    description: "If you're a donor, fill in the details and list your food for the community to see.",
  },
  {
    step: 3,
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Find Available Food",
    description: "If you're a receiver, browse the listings to find available food near you and reserve it.",
  },
  {
    step: 4,
    icon: <Leaf className="w-10 h-10 text-primary" />,
    title: "Enjoy Sustainable Living",
    description: "Connect with your community to lend a helping hand and reduce food waste together.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Get started in four easy steps</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Saving food has never been this simple.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <Card className="text-center p-6 h-full transition-transform transform hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                    {step.step}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold mb-2">{step.title}</CardTitle>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
