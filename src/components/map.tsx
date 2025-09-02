
'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type Location = {
  top: string;
  left: string;
  name: string;
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
          alt="Map of the area"
          width={800}
          height={600}
          className="w-full h-auto"
          data-ai-hint="city map"
        />
        {locations.map((loc, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ top: loc.top, left: loc.left }}
              >
                <MapPin className="w-8 h-8 text-red-500 fill-current" />
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
