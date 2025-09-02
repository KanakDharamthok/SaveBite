
'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

type Location = {
  top: string;
  left: string;
  name: string;
  type: 'donor' | 'receiver';
};

type MapProps = {
  locations: Location[];
};

export function Map({ locations }: MapProps) {
  return (
    <TooltipProvider>
      <div className="relative">
        <Image
          src="https://picsum.photos/800/600"
          alt="Map of India"
          width={800}
          height={600}
          className="w-full h-auto"
          data-ai-hint="India map"
        />
        {locations.map((loc, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ top: loc.top, left: loc.left }}
              >
                <MapPin
                  className={cn(
                    'w-8 h-8',
                    loc.type === 'donor'
                      ? 'text-blue-500 fill-blue-500/40'
                      : 'text-green-500 fill-green-500/40'
                  )}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{loc.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
