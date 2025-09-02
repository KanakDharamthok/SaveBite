"use client";

import Link from "next/link";
import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navLinks = [
  { href: "/donate", label: "Donate Food" },
  { href: "/receive", label: "Available Food" },
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#community-stories", label: "Community" },
];

const mockNotifications = [
  {
    avatar: "https://picsum.photos/100/100?random=4",
    aiHint: "restaurant logo",
    title: "New food from The Grand Bakery",
    description: "2 dozen mixed pastries available now.",
    time: "5m ago",
  },
  {
    avatar: "https://picsum.photos/100/100?random=5",
    aiHint: "user portrait",
    title: "Reservation from John D.",
    description: "Reserved 'Leftover Pizza and Salad'.",
    time: "1h ago",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
        </div>

        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
              <div className="p-4">
                <h3 className="text-lg font-medium">Notifications</h3>
                <p className="text-sm text-muted-foreground">You have {mockNotifications.length} unread messages.</p>
              </div>
              <div className="space-y-4">
                {mockNotifications.map((notification, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border-t">
                     <Avatar className="h-8 w-8">
                      <AvatarImage src={notification.avatar} alt="Avatar" data-ai-hint={notification.aiHint} />
                      <AvatarFallback>{notification.title.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium leading-none">{notification.title}</p>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
               <div className="p-4 border-t">
                <Button size="sm" className="w-full">View all notifications</Button>
              </div>
            </PopoverContent>
          </Popover>

          <Button asChild>
            <Link href="#download">Download App</Link>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full py-6">
                <Link href="/" className="mb-8" onClick={() => setIsMenuOpen(false)}>
                  <Logo />
                </Link>
                <nav className="flex flex-col items-start space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
