'use client';

import { useState, useTransition, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { analyzeFridgeImage } from '@/app/actions';
import type { ImageAnalysisState } from '@/lib/types';
import { Loader2, Upload, Wand2, ChefHat, Salad } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ImageAnalyzer() {
  const [state, setState] = useState<ImageAnalysisState>({ loading: false });
  const [preview, setPreview] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!preview) {
      toast({
        title: 'No Image Selected',
        description: 'Please select an image to analyze.',
        variant: 'destructive',
      });
      return;
    }

    const formData = new FormData();
    formData.append('photoDataUri', preview);

    startTransition(async () => {
      setState({ loading: true, data: undefined, error: undefined });
      const result = await analyzeFridgeImage(formData);
      if (result.error) {
        toast({
          title: 'Analysis Error',
          description: result.error,
          variant: 'destructive',
        });
        setState({ error: result.error, loading: false });
      } else {
        setState({ data: result.data, loading: false });
      }
    });
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div
            className="relative flex justify-center items-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            {preview ? (
              <Image src={preview} alt="Fridge preview" layout="fill" objectFit="contain" className="rounded-lg" />
            ) : (
              <div className="text-center text-muted-foreground">
                <Upload className="mx-auto h-12 w-12" />
                <p>Click to upload or drag & drop</p>
                <p className="text-xs">PNG, JPG, WEBP up to 10MB</p>
              </div>
            )}
            <Input
              ref={fileInputRef}
              type="file"
              name="image"
              accept="image/png, image/jpeg, image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <Button type="submit" disabled={isPending || !preview} className="w-full">
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Analyze Image
          </Button>
        </form>

        {isPending && (
          <div className="mt-6 flex flex-col items-center justify-center text-muted-foreground">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p className="mt-2">Analyzing your fridge... Bon appétit!</p>
          </div>
        )}

        {state.data && (
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Salad />
                  Identified Ingredients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  {state.data.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat />
                  Suggested Recipes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  {state.data.suggestedRecipes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
