'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="A vibrant collection of fresh fruits and vegetables"
        fill
        className="object-cover -z-10"
        priority
        data-ai-hint="food sustainability"
      />
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="container px-4 md:px-6 animate-fade-in-up">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl !leading-tight text-shadow-lg">
            Reduce Food Waste. Save Smart. Live Green.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 text-shadow-md">
            Track your food, save money, and fight waste with the power of AI. Join our movement to make every bite count.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#download">Download the App</Link>
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }
        .text-shadow-md {
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
