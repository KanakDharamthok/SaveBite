'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

type Location = {
  top: string; // Will be latitude
  left: string; // Will be longitude
  name: string;
  type: 'donor' | 'receiver';
  details: string;
};

type MapProps = {
  locations: Location[];
};

// This is a workaround for a known issue with react-leaflet and Next.js App Router
// It ensures the default marker icon is loaded correctly.
const fixDefaultIcon = () => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
        iconUrl: require('leaflet/dist/images/marker-icon.png').default,
        shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
    });
};


const donorIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/3448/3448623.png',
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
});

const receiverIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/3448/3448659.png',
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
});


export function Map({ locations }: MapProps) {
  useEffect(() => {
    fixDefaultIcon();
  }, []);
    
  const getPosition = (location: Location): [number, number] => {
    const lat = parseFloat(location.top);
    const lng = parseFloat(location.left);
    
    if(!isNaN(lat) && !isNaN(lng)) {
        return [lat, lng];
    }
    
    // Fallback coordinates (center of India) if parsing fails
    return [20.5937, 78.9629];
  };

  const centerPosition = getPosition(locations[0] ?? {top: '20.5937', left: '78.9629', name: '', type: 'donor', details: ''});

  return (
      <MapContainer center={centerPosition} zoom={7} scrollWheelZoom={false} className="w-full h-[500px] z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, index) => (
          <Marker 
            key={index}
            position={getPosition(loc)} 
            icon={loc.type === 'donor' ? donorIcon : receiverIcon}>
            <Popup>
              <div className="font-sans">
                <p className="font-bold text-base">{loc.name}</p>
                <p className="text-sm">{loc.details}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
  );
}
