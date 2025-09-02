import Image from "next/image";
import Link from "next/link";
import { AppStoreBadge } from "@/components/icons/app-store-badge";
import { GooglePlayBadge } from "@/components/icons/google-play-badge";

export function Download() {
  return (
    <section id="download" className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Start Saving Today
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-md mx-auto md:mx-0">
              Download SaveBite now and join thousands of others in the fight against food waste. Available on iOS and Android.
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-4 mt-8">
              <Link href="#" aria-label="Download on the App Store">
                <AppStoreBadge className="h-12 w-auto" />
              </Link>
              <Link href="#" aria-label="Get it on Google Play">
                <GooglePlayBadge className="h-12 w-auto" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/400/600"
              alt="SaveBite app screenshot"
              width={300}
              height={600}
              className="rounded-2xl shadow-2xl"
              data-ai-hint="app screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
