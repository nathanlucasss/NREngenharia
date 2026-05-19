"use client";

import L from "leaflet";
import { useEffect } from "react";
import MarkerClusterGroup from "react-leaflet-cluster";
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";

import { Property } from "@/types/property";
import { getPropertyInsights } from "@/services/property-insights";

interface PropertiesMapProps {
  properties: Property[];
  selectedId: string | null;
  onHoverProperty?: (id: string | null) => void;
  onSelectProperty?: (id: string) => void;
}

function buildPinIcon(index: number, isActive: boolean) {
  return L.divIcon({
    className: "lux-map-pin-wrap",
    html: `<span class="lux-map-pin ${isActive ? "active" : ""}">${index + 1}</span>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
}

function clusterIcon(cluster: { getChildCount: () => number }) {
  return L.divIcon({
    className: "lux-map-cluster-wrap",
    html: `<span class="lux-map-cluster">${cluster.getChildCount()}</span>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
}

function MapViewportUpdater({ properties }: Pick<PropertiesMapProps, "properties">) {
  const map = useMap();

  useEffect(() => {
    const positions = properties.map(
      (item) => [item.coordinates.lat, item.coordinates.lng] as [number, number],
    );

    if (positions.length === 1) {
      map.setView(positions[0], 16, { animate: true, duration: 0.45 });
      return;
    }

    if (positions.length > 1) {
      map.fitBounds(positions, {
        padding: [44, 44],
        maxZoom: 16,
        animate: true,
        duration: 0.45,
      });
    }
  }, [map, properties]);

  return null;
}

export function PropertiesMap({
  properties,
  selectedId,
  onHoverProperty,
  onSelectProperty,
}: PropertiesMapProps) {
  const fallbackCenter: [number, number] = [-20.896, -45.273];

  const center: [number, number] =
    properties.length > 0
      ? [
          properties.reduce((sum, item) => sum + item.coordinates.lat, 0) / properties.length,
          properties.reduce((sum, item) => sum + item.coordinates.lng, 0) / properties.length,
        ]
      : fallbackCenter;

  return (
    <MapContainer
      key={properties.map((item) => item.id).join("|") || "empty"}
      className="lux-real-map"
      center={center}
      zoom={14}
      scrollWheelZoom
      zoomControl={false}
    >
      <MapViewportUpdater properties={properties} />
      <ZoomControl position="topright" />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; CARTO'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      <MarkerClusterGroup chunkedLoading iconCreateFunction={clusterIcon}>
        {properties.map((property, index) => {
          const insights = getPropertyInsights(property);

          return (
            <Marker
              key={property.id}
              position={[property.coordinates.lat, property.coordinates.lng]}
              icon={buildPinIcon(index, selectedId === property.id)}
              zIndexOffset={selectedId === property.id ? 900 : 0}
              eventHandlers={{
                mouseover: () => onHoverProperty?.(property.id),
                mouseout: () => onHoverProperty?.(null),
                click: () => onSelectProperty?.(property.id),
              }}
            >
              <Popup>
                <strong>{property.name}</strong>
                <br />
                {property.address.neighborhood} - {property.address.city}
                <br />
                <small>
                  {insights.badge} • Verificado
                </small>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
}