
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
  details: string;
};

type MapProps = {
  locations: Location[];
};

export function Map({ locations }: MapProps) {
  return (
    <TooltipProvider>
      <div className="relative">
        <Image
          src="https://picsum.photos/seed/city-map/1200/800"
          alt="Map of city"
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
          data-ai-hint="city map"
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
                    'w-8 h-8 drop-shadow-lg',
                    loc.type === 'donor'
                      ? 'text-blue-500 fill-blue-500/40'
                      : 'text-green-500 fill-green-500/40'
                  )}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-bold">{loc.name}</p>
              <p>{loc.details}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
