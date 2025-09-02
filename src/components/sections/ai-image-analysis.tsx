import { ImageAnalyzer } from "@/components/ai/image-analyzer";

export function AIImageAnalysis() {
  return (
    <section id="ai-image-analysis" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            What's in Your Fridge?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Snap a photo of your fridge contents, and our AI will identify ingredients and suggest recipes to make.
          </p>
        </div>
        <div className="mt-12">
          <ImageAnalyzer />
        </div>
      </div>
    </section>
  );
}
