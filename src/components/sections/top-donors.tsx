import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Crown } from "lucide-react";

const topDonors = [
  { rank: 1, name: "City Center Hotel", meals: 520, avatar: "https://picsum.photos/100/100?random=10", aiHint: "building hotel" },
  { rank: 2, name: "The Grand Bakery", meals: 450, avatar: "https://picsum.photos/100/100?random=11", aiHint: "bakery logo" },
  { rank: 3, name: "Metro Grocers", meals: 380, avatar: "https://picsum.photos/100/100?random=12", aiHint: "grocery store" },
  { rank: 4, name: "Healthy Eats Cafe", meals: 310, avatar: "https://picsum.photos/100/100?random=13", aiHint: "cafe logo" },
  { rank: 5, name: "Campus Dining Hall", meals: 250, avatar: "https://picsum.photos/100/100?random=14", aiHint: "university building" },
];

export function TopDonors() {
  return (
    <section id="top-donors" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Top Donors</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            A huge thank you to our most generous donors who are leading the charge against food waste.
          </p>
        </div>
        <Card className="mt-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="text-amber-500" />
              Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Rank</TableHead>
                  <TableHead>Donor</TableHead>
                  <TableHead className="text-right">Meals Donated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topDonors.map((donor) => (
                  <TableRow key={donor.rank} className="font-medium">
                    <TableCell className="font-bold text-lg text-primary">{donor.rank}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={donor.avatar} alt={donor.name} data-ai-hint={donor.aiHint} />
                          <AvatarFallback>{donor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{donor.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-semibold">{donor.meals.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
