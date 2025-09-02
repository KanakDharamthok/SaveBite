'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAppGuidance } from '@/app/actions';
import type { AppGuideState } from '@/lib/types';
import { Loader2, Sparkles, User, Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function AppGuideAssistant() {
  const [state, setState] = useState<AppGuideState>({ loading: false });
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get('query') as string;

    if (!query) return;

    setMessages((prev) => [...prev, { role: 'user', content: query }]);
    event.currentTarget.reset();

    startTransition(async () => {
      setState({ loading: true });
      const result = await getAppGuidance(formData);
      if (result.error) {
        toast({
          title: 'Error',
          description: result.error,
          variant: 'destructive',
        });
        setState({ error: result.error, loading: false });
        setMessages((prev) => prev.slice(0, -1)); // Remove user message if error
      } else if (result.data) {
        setState({ data: result.data, loading: false });
        setMessages((prev) => [...prev, { role: 'assistant', content: result.data!.response }]);
      }
    });
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <div className="space-y-4 h-80 overflow-y-auto pr-4 mb-4 rounded-lg border p-4 bg-muted/50">
          <div className="flex items-start gap-3">
              <div className="bg-primary rounded-full p-2 text-primary-foreground">
                <Bot size={20} />
              </div>
              <div className="bg-primary/10 text-foreground p-3 rounded-lg rounded-tl-none">
                <p>
                  Welcome! I'm your AI guide for the SaveBite app. Ask me anything about our features, and I'll be happy to help you get started. For example, you could ask, "How do I donate food?"
                </p>
              </div>
            </div>
          {messages.map((message, index) => (
            <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
              {message.role === 'assistant' && (
                <div className="bg-primary rounded-full p-2 text-primary-foreground">
                  <Bot size={20} />
                </div>
              )}
              <div className={`p-3 rounded-lg max-w-[80%] ${
                  message.role === 'user'
                    ? 'bg-secondary text-secondary-foreground rounded-br-none'
                    : 'bg-primary/10 text-foreground rounded-tl-none'
                }`}>
                <p>{message.content}</p>
              </div>
               {message.role === 'user' && (
                <div className="bg-secondary rounded-full p-2 text-secondary-foreground">
                  <User size={20} />
                </div>
              )}
            </div>
          ))}
          {isPending && (
             <div className="flex items-start gap-3">
              <div className="bg-primary rounded-full p-2 text-primary-foreground">
                <Bot size={20} />
              </div>
              <div className="bg-primary/10 text-foreground p-3 rounded-lg rounded-tl-none flex items-center gap-2">
                 <Loader2 className="h-5 w-5 animate-spin" />
                 <span>Thinking...</span>
              </div>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <Input
            name="query"
            placeholder="Ask a question, e.g., 'How do I find food?'"
            required
            className="flex-grow"
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Ask
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
