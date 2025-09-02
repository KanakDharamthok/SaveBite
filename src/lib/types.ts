import type { GetShelfLifeOutput } from "@/ai/flows/ai-shelf-life-assistant";
import type { AnalyzeFridgeImageOutput } from "@/ai/flows/ai-powered-image-analysis";
import type { GetAppGuidanceOutput } from "@/ai/flows/app-guide-assistant";

export type ShelfLifeState = {
  data?: GetShelfLifeOutput;
  error?: string;
  loading: boolean;
};

export type ImageAnalysisState = {
  data?: AnalyzeFridgeImageOutput;
  error?: string;
  loading: boolean;
};

export type AppGuideState = {
  data?: GetAppGuidanceOutput;
  error?: string;
  loading: boolean;
};
