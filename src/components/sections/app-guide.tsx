import { AppGuideAssistant } from "@/components/ai/app-guide-assistant";

export function AppGuide() {
  return (
    <section id="app-guide" className="py-16 md:py-24">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Need Help? Ask Our AI Assistant!
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Our smart assistant is here to guide you through the app. Just type your question below.
          </p>
        </div>
        <div className="mt-12">
          <AppGuideAssistant />
        </div>
      </div>
    </section>
  );
}
