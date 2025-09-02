'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HandHeart, Users } from "lucide-react";

export function GetInvolved() {
  return (
    <section id="get-involved" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-shadow-md">
            Ready to Make a Difference?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90 text-shadow-sm">
            Whether you have surplus food to share or you're in need of a meal, you can be part of the solution. Join the SaveBite community today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/donate">
                <HandHeart className="mr-2" /> Donate Food
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/receive">
                <Users className="mr-2" /> Find Food
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .text-shadow-md {
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
}
