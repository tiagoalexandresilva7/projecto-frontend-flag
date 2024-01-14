import { useEffect, useState } from "react";
import weatherAPI from "../services/weatherAPI";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapWidget({ city, source }) {
  const [coords, setCoords] = useState({});

  useEffect(
    function () {
      (async function () {
        const response = await weatherAPI.FetchCityLatLon(city);
        setCoords(response);
      })();
    },
    [city],
  );

  if (coords.lat) {
    return (
      <>
        <MapContainer
          center={[coords.lat, coords.lon]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[coords.lat, coords.lon]}>
            <Popup>
              <a href={source}>Original article author</a>
            </Popup>
          </Marker>
        </MapContainer>
      </>
    );
  } else {
    return null;
  }
}

export default MapWidget;
