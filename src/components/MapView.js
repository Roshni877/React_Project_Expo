import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView() {
  const [isDark, setIsDark] = React.useState(document.documentElement.getAttribute("data-theme") === "dark");

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  // Karnataka Coast (example real region)
  const center = [14.5, 74.5];
  
  const tileUrl = isDark 
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  const locations = [
    {
      name: "Erosion Zone",
      position: [14.6, 74.4],
      color: "#ef4444",
    },
    {
      name: "Stable Coast",
      position: [14.4, 74.6],
      color: "#10b981",
    },
    {
      name: "Accretion Area",
      position: [14.55, 74.55],
      color: "#0ea5e9",
    },
  ];

  return (
    <div className="map-box">

      <h3 style={{ color: 'var(--text-main)' }}>🗺️ Coastal Monitoring Map</h3>
      <p style={{ color: 'var(--text-muted)' }}>Visualizing erosion, accretion, and stable shoreline regions.</p>

      <MapContainer
        center={center}
        zoom={10}
        className="map-container"
      >
        <TileLayer
          url={tileUrl}
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
        />

        {locations.map((loc, index) => (
          <React.Fragment key={index}>
            <Marker position={loc.position}>
              <Popup>
                <strong>{loc.name}</strong>
              </Popup>
            </Marker>

            <Circle
              center={loc.position}
              radius={2000}
              pathOptions={{
                color: loc.color,
                fillColor: loc.color,
                fillOpacity: 0.3,
              }}
            />
          </React.Fragment>
        ))}
      </MapContainer>

    </div>
  );
}

export default MapView;