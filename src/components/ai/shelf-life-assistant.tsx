'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getShelfLife } from '@/app/actions';
import type { ShelfLifeState } from '@/lib/types';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ShelfLifeAssistant() {
  const [state, setState] = useState<ShelfLifeState>({ loading: false });
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      setState({ loading: true });
      const result = await getShelfLife(formData);
      if (result.error) {
        toast({
          title: 'Error',
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
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <Input
            name="foodItem"
            placeholder="e.g., 'Opened milk', 'Fresh strawberries'"
            required
            className="flex-grow"
          />
          <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Get Shelf Life
          </Button>
        </form>

        {isPending && (
          <div className="mt-6 flex items-center justify-center text-muted-foreground">
            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
            <p>Our AI is thinking...</p>
          </div>
        )}
        
        {state.data && (
          <Card className="mt-6 bg-secondary">
            <CardHeader>
              <CardTitle className="text-xl">Storage & Shelf Life</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{state.data.shelfLife}</p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
