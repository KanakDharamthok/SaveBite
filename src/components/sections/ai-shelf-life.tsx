import { ShelfLifeAssistant } from "@/components/ai/shelf-life-assistant";

export function AIShelfLife() {
  return (
    <section id="ai-shelf-life" className="py-16 md:py-24">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            AI Shelf Life Assistant
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Not sure how long your food will last? Ask our AI assistant for advice on storage and freshness.
          </p>
        </div>
        <div className="mt-12">
          <ShelfLifeAssistant />
        </div>
      </div>
    </section>
  );
}
