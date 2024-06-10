import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "700px",
};
const center = {
  lat: 36.6272962,
  lng: 127.498731,
};

const locations = [
  { lat: 36.6372962, lng: 127.508731, info: "Location 1" },
  { lat: 36.6272962, lng: 127.498731, info: "Location 2" },
  // 他の位置データを追加
];

const MapComponent = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error("Google Maps API key is not defined in the environment variables.");
  }

  const renderMap = () => (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
  
    </GoogleMap>
  );

  return <LoadScript googleMapsApiKey={apiKey}>{renderMap()}</LoadScript>;
};

export default MapComponent;
