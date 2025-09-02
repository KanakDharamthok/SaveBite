import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScanLine, SmartphoneNfc, Leaf } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: <ScanLine className="w-10 h-10 text-primary" />,
    title: "Log or Scan Food Items",
    description: "Quickly add food to your digital pantry by scanning barcodes or entering them manually.",
  },
  {
    step: 2,
    icon: <SmartphoneNfc className="w-10 h-10 text-primary" />,
    title: "Get Expiry Alerts & Info",
    description: "Receive timely reminders on your phone and get AI-powered tips on how to best store your food.",
  },
  {
    step: 3,
    icon: <Leaf className="w-10 h-10 text-primary" />,
    title: "Enjoy Sustainable Living",
    description: "Use your food wisely, share what you can't use, and see the positive impact you're making.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Get started in three easy steps</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Saving food has never been this simple.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
