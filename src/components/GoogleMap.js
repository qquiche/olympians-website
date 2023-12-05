// // components/GoogleMap.js
// import { GoogleMap, LoadScript } from 'react-google-maps/api';
// import { useEffect, useState } from 'react';

// const GoogleMapComponent = () => {
//   const [map, setMap] = useState(null);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   useEffect(() => {
//     // Add any additional map-related logic here
//   }, [map]);

//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap
//         onLoad={onLoad}
//         mapContainerStyle={{ width: '100%', height: '400px' }}
//         center={{ lat: YOUR_DEFAULT_LATITUDE, lng: YOUR_DEFAULT_LONGITUDE }}
//         zoom={10}
//       >
//         {/* Add any additional map components, markers, etc. here */}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default GoogleMapComponent;
