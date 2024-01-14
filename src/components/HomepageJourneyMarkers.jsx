import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "wouter";

function HomepageJourneyMarkers({ markers }) {
  return (
    <>
      <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((item, index) => (
          <Marker key={item.name} position={[item.lat, item.lon]}>
            <Popup>
              <Link href={`/journeys/${index + 1}`}>{`Visit ${item.name}`}</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default HomepageJourneyMarkers;
