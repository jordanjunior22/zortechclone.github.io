import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMapEvents, Marker, Popup } from 'react-leaflet';
import osmtogeojson from 'osmtogeojson';


function Map() {
  const [geojson, setGeojson] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    fetch('map.osm')
      .then(response => response.text())
      .then(data => {
        const geojson = osmtogeojson(data);
        setGeojson(geojson);
      });
  }, []);

  function handleLocationFound(e) {
    setUserLocation(e.latlng);
  }

  return (
    <div className="map-container">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {geojson && <GeoJSON data={geojson} />}
        <LocationMarker handleLocationFound={handleLocationFound} />
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>You are here!</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

function LocationMarker({ handleLocationFound }) {
  useMapEvents({
    locationfound(e) {
      handleLocationFound(e);
    },
  });

  return null;
}

export default Map;
