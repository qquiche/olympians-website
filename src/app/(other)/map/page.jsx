"use client";
import React from 'react';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { HiHome } from "react-icons/hi";
const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 37.6379, // default latitude
  lng: 21.6302, // default longitude
};

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const router = useRouter();

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
    <p className=" text-2xl text-red-900 font-semibold cursor-pointer text-right" onClick={() => router.push("/")}><HiHome size={50}/></p>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
      >
        
        <MarkerF position={{ lat: 41.8986, lng: 12.4769}} label = "The Pantheon" />
        <MarkerF position={{ lat: 40.0834, lng: 22.3499 }} label = "Mount Olympus" />
        <MarkerF position={{ lat: 37.6379, lng: 21.6302 }} label = "The Temple of Zeus at Olympia" />
        <MarkerF position={{ lat: 37.6578, lng: 24.0152 }} label = "The Temple of Poseidon at Sounion" />
        <MarkerF position={{ lat: 37.6388, lng: 21.6299 }} label = "The Temple of Hera" />
        <MarkerF position={{ lat: 27.7757, lng: 30.8003 }} label = "Hermopolis" />
        <MarkerF position={{ lat: 37.9496, lng: 27.3639 }} label = "The Temple of Artemis or Artemision" />
        <MarkerF position={{ lat: 37.975535816564395, lng: 23.722746334959528}} label = "The Temple of Ares, Ancient Agora of Athens" />
        <MarkerF position={{ lat: 37.9716, lng: 23.7249}} label = "The Temple of Athena Nike, Acropolis of Athens" />
        <MarkerF position={{ lat: 37.029167, lng: 25.432556}} label = "The Temple of Sangri (Most likely devoted to Demeter or Kore)" />
        <MarkerF position={{ lat: 37.9756, lng: 23.7215}} label = "The Temple of Hephaestus" />
        <MarkerF position={{ lat: 37.0775, lng: 25.3816}} label = "The Temple of Dionysus" />
        <MarkerF position={{ lat: 39.957, lng:  26.239}} label = "Ruins of Troy" />

      </GoogleMap>
    </div>
  );
};

export default App;