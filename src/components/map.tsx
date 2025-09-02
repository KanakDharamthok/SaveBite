'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
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
    <div className="relative w-full h-[500px] bg-secondary">
      <Image
        src="https://picsum.photos/1200/800"
        alt="Map of available food donations"
        fill
        objectFit="cover"
        className="object-cover"
        data-ai-hint="street map"
      />
      {locations.map((loc, index) => (
        <div
          key={index}
          className="absolute group"
          style={{ top: `${loc.top}%`, left: `${loc.left}%` }}
        >
          <MapPin
            className={cn(
              "w-8 h-8 drop-shadow-lg transition-transform duration-300 group-hover:scale-125",
              loc.type === 'donor' ? "text-blue-500 fill-blue-500/50" : "text-green-500 fill-green-500/50"
            )}
          />
          <div className="absolute bottom-full mb-2 w-max max-w-xs p-2 text-xs text-white bg-black/70 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <p className="font-bold">{loc.name}</p>
            <p>{loc.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
