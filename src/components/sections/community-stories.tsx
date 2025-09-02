import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const stats = [
  { value: "15,000+", label: "kg of food saved" },
  { value: "50,000+", label: "users worldwide" },
  { value: "1,000+", label: "community shares" },
]

const testimonials = [
  {
    name: "Sarah L.",
    role: "Busy Mom",
    quote: "SaveBite has been a game-changer for our family. We're throwing away so much less food and saving money on groceries!",
    avatar: "https://picsum.photos/100/100?random=1",
    aiHint: "woman portrait"
  },
  {
    name: "Mike R.",
    role: "Student",
    quote: "As a student on a budget, this app is a lifesaver. The recipes from leftovers feature is my favorite.",
    avatar: "https://picsum.photos/100/100?random=2",
    aiHint: "man portrait"
  },
  {
    name: "Elena G.",
    role: "Eco-Enthusiast",
    quote: "I love being able to see my impact. It's so motivating to know I'm part of a community making a real difference.",
    avatar: "https://picsum.photos/100/100?random=3",
    aiHint: "person smiling"
  },
]

export function CommunityStories() {
  return (
    <section id="community-stories" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">From Our Community</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Our community is making a tangible impact on food waste, one household at a time. See what they have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-md">
              <CardContent className="p-6">
                <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint}/>
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
