import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Map } from "@/components/map";

const locations = [
  { top: "25%", left: "30%", name: "City Center Hotel" },
  { top: "50%", left: "50%", name: "The Grand Bakery" },
  { top: "60%", left: "20%", name: "Metro Grocers" },
  { top: "40%", left: "70%", name: "Healthy Eats Cafe" },
  { top: "75%", left: "60%", name: "Campus Dining Hall" },
];

export function LiveMap() {
  return (
    <section id="live-map" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Card className="shadow-lg overflow-hidden">
              <Map locations={locations} />
            </Card>
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              See the Impact Happen Live
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-md mx-auto md:mx-0">
              Our live map shows where food is being donated and collected in real-time. Every pin is a story of waste prevented and a community helped.
            </p>
            <Button size="lg" asChild className="mt-8">
              <Link href="/receive">
                <MapPin className="mr-2" /> Find Food Near You
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
