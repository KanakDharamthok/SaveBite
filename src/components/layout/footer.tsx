import Link from "next/link";
import { Facebook, Github, Twitter, Instagram } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Reduce Food Waste. Save Money. Help the Planet.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
                <li><Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">How It Works</Link></li>
                <li><Link href="#community-stories" className="text-sm text-muted-foreground hover:text-foreground">Community</Link></li>
                <li><Link href="#download" className="text-sm text-muted-foreground hover:text-foreground">Download App</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">support@savebite.com</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">press@savebite.com</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Join our team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} SaveBite. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground"><Github className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
