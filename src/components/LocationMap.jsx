// src/components/LocationMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';

// Fix for default marker icon in React Leaflet
const customIcon = icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const LocationMap = ({ locations, selectedLocation }) => {
  // Default center on first location or selected location
  const center = selectedLocation 
    ? selectedLocation.coordinates 
    : locations[0]?.coordinates || [31.5204, 74.3587]; // Default to Lahore if no locations

  return (
    <MapContainer 
      center={center} 
      zoom={13} 
      style={{ height: '100%', width: '100%' }}
      className="rounded-xl overflow-hidden shadow-md"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {locations.map((location) => (
        <Marker 
          key={location.id} 
          position={location.coordinates}
          icon={customIcon}
        >
          <Popup>
            <div className="p-1">
              <h3 className="font-bold">{location.name}</h3>
              <p className="text-sm">{location.address}</p>
              <p className="text-sm mt-1">{location.phone}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LocationMap;