"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// ============================================
// CITY DATA - Edit preview text here
// ============================================
const cities = [
  {
    name: "Soroca (Nimereuca)",
    country: "Moldova",
    countryCode: "MD",
    coords: [48.1567, 28.2867] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Soroca",
    preview: "Where it all started. A small village in northern Moldova where my parents were sometimes paid in tomatoes. We worked the land for subsistence until my father made a bold move—selling his childhood home, his late father's car, everything—to put a down payment on a small flat in the capital. A crazy attempt at better opportunities for my brother and me. We moved into an unfinished apartment and lived through financial hardship until things slowly improved.",
  },
  {
    name: "Chișinău",
    country: "Moldova",
    countryCode: "MD",
    coords: [47.0105, 28.8638] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Chi%C8%99in%C4%83u",
    preview: "My city. I know it like the back of my hand. Learned to speak here, picked up Russian from the streets. This is where I was introduced to coding—Pascal. That didn't exactly spark my interest. Went through school here and attended Valeriu Poliacov music school. The capital shaped who I am.",
  },
  {
    name: "Philadelphia",
    country: "USA",
    countryCode: "US",
    coords: [39.9526, -75.1652] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Philadelphia",
    preview: "Boarding high school at Westtown School. Became an Eagles fan. Had a host family who taught me about America—its culture, its contradictions. They took me across the East Coast, Colorado, Utah. Spent summers there too. My first real immersion in a world completely different from home.",
  },
  {
    name: "Siegen",
    country: "Germany",
    countryCode: "DE",
    coords: [50.8747, 8.0244] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Siegen",
    preview: "Came during COVID to save pocket money for college. Worked at Burger King. At first we lived in a nearby village and had to walk an hour through the forest at 1 AM—wild boars and all. Got attacked once. Stayed until August, then left for the U.S. to start university.",
  },
  {
    name: "Dublin",
    country: "Ireland",
    countryCode: "IE",
    coords: [53.3498, -6.2603] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Dublin",
    preview: "After the full-scale invasion of Ukraine, air travel to Moldova stopped. I spent college summers in Dublin with my brother. A temporary home during uncertain times.",
  },
  {
    name: "San Francisco",
    country: "USA",
    countryCode: "US",
    coords: [37.7749, -122.4194] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/San_Francisco",
    preview: "First and last semester of college. This is where I learned about AI and tech. Started coding at the beginning of college, fell in love with it, and added it as a second major. The city that turned curiosity into direction.",
  },
  {
    name: "Seoul",
    country: "South Korea",
    countryCode: "KR",
    coords: [37.5665, 126.978] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Seoul",
    preview: "The biggest cultural shock. An extraordinarily organized society—amazing food, discipline, safety, social responsibility, humble people. Layers of history everywhere. Second semester abroad. A place that recalibrated my sense of what's possible.",
  },
  {
    name: "Taipei",
    country: "Taiwan",
    countryCode: "TW",
    coords: [25.033, 121.5654] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Taipei",
    preview: "Exotic and warm. Fell in love with nature and the food. Took a cooking class at NTU. Played in competitive football tournaments with our freshly-formed Minerva FC. Third semester abroad.",
  },
  {
    name: "Hyderabad",
    country: "India",
    countryCode: "IN",
    coords: [17.385, 78.4867] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Hyderabad",
    preview: "My favorite. A country with inexhaustible variety—culture, food, languages. Traveled all over. Interned at the Centre for Cellular and Molecular Biology and LaCONES, the Laboratory for the Conservation of Endangered Species. Fourth semester abroad.",
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    countryCode: "AR",
    coords: [-34.6037, -58.3816] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Buenos_Aires",
    preview: "Interned at Universidad Torcuato Di Tella. Explored Patagonia extensively—Calafate, Ushuaia, Río Gallegos, Torres del Paine across the border in Chile. The south of the world. Fifth semester abroad.",
  },
  {
    name: "London",
    country: "UK",
    countryCode: "GB",
    coords: [51.5074, -0.1278] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/London",
    preview: "Fell in love with football all over again. Decided I wanted to get involved in the field. Worked on front-end and visual content for Exchange Theatre, a London-based performance group. Sixth semester abroad.",
  },
  {
    name: "Berlin",
    country: "Germany",
    countryCode: "DE",
    coords: [52.52, 13.405] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Berlin",
    preview: "Faced with big problems. Had my first accident—learned about insurance, police, law. As student body president, I navigated a crisis when U.S. government rule changes impacted my entire university. Led a stressful cohort-wide move across the ocean. Final semester abroad.",
  },
];

// Country code to flag emoji
function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

interface CityCardProps {
  city: (typeof cities)[0];
  onClose: () => void;
}

function CityCard({ city, onClose }: CityCardProps) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="city-card" onClick={(e) => e.stopPropagation()}>
      <button onClick={onClose} className="city-card-close" aria-label="Close">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      <div className="city-card-header">
        <div className="city-card-flag">{getFlagEmoji(city.countryCode)}</div>
        <div className="city-card-title">
          <span className="city-card-name">{city.name}</span>
          <span className="city-card-country">{city.country}</span>
        </div>
      </div>

      <div className="city-card-actions">
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setShowPreview(!showPreview);
          }}
          className={`city-card-btn city-card-btn-preview ${showPreview ? "active" : ""}`}
          type="button"
        >
          {showPreview ? "Hide" : "Preview"}
        </button>
        <a
          href={city.wiki}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="city-card-btn city-card-btn-link"
        >
          Learn more
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="city-card-arrow">
            <path d="M3.5 2.5H9.5V8.5M9.5 2.5L2.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <div className={`city-card-preview ${showPreview ? "city-card-preview-visible" : ""}`}>
        <p>{city.preview}</p>
      </div>
    </div>
  );
}

// Component to handle map click events (only on the map itself, not markers)
function MapClickHandler({ onMapClick }: { onMapClick: () => void }) {
  const map = useMap();

  useEffect(() => {
    const container = map.getContainer();
    const handleClick = (e: MouseEvent) => {
      // Only close if clicking directly on the map container or tiles
      const target = e.target as HTMLElement;
      if (target.classList.contains('leaflet-container') ||
          target.classList.contains('leaflet-tile') ||
          target.closest('.leaflet-tile-pane')) {
        onMapClick();
      }
    };
    container.addEventListener('click', handleClick);
    return () => {
      container.removeEventListener('click', handleClick);
    };
  }, [map, onMapClick]);

  return null;
}

export default function WorldMap() {
  const [mounted, setMounted] = useState(false);
  const [selectedCity, setSelectedCity] = useState<(typeof cities)[0] | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="world-map-container world-map-loading">
        <div className="world-map-loading-text">Loading map...</div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        /* ============================================
           WORLD MAP STYLES
           ============================================ */

        .world-map-container {
          position: relative;
          width: calc(100% + 48px);
          margin-left: -24px;
          margin-right: -24px;
          height: 520px;
          border-radius: 0;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: #0d0d0f;
        }

        @media (min-width: 1024px) {
          .world-map-container {
            width: calc(100% + 64px);
            margin-left: -32px;
            margin-right: -32px;
          }
        }

        .world-map-loading {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .world-map-loading-text {
          color: #666;
          font-size: 0.875rem;
        }

        .world-map-container .leaflet-container {
          width: 100%;
          height: 100%;
          background: #0d0d0f;
          font-family: inherit;
        }

        /* Muted dark map tiles */
        .world-map-container .leaflet-tile-pane {
          filter: invert(1) grayscale(100%) brightness(0.78) contrast(1.05);
        }

        /* Pin glow effect */
        .world-map-container .leaflet-overlay-pane svg path {
          transition: all 0.2s ease;
          filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.3));
        }

        .world-map-container .leaflet-overlay-pane svg path:hover {
          filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.4));
        }

        .world-map-container .leaflet-interactive {
          cursor: pointer !important;
        }

        /* Tooltip styles */
        .world-map-container .leaflet-tooltip {
          background: rgba(20, 20, 24, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 400;
          padding: 6px 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          white-space: nowrap;
          letter-spacing: 0.01em;
        }

        .world-map-container .leaflet-tooltip::before {
          display: none;
        }

        .world-map-container .leaflet-tooltip-top {
          margin-top: -8px;
        }

        /* Hide zoom controls */
        .world-map-container .leaflet-control-zoom {
          display: none;
        }

        /* Hide attribution */
        .world-map-container .leaflet-control-attribution {
          display: none !important;
        }

        /* ============================================
           CENTERED CITY CARD
           ============================================ */

        .city-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          pointer-events: auto;
          padding: 20px;
          background: rgba(0, 0, 0, 0.3);
        }

        .city-card {
          position: relative;
          background: linear-gradient(145deg, rgba(28, 28, 32, 0.98), rgba(20, 20, 24, 0.98));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          box-shadow:
            0 8px 40px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.03) inset;
          padding: 20px 22px 22px;
          width: 320px;
          max-width: calc(100% - 40px);
          max-height: calc(100% - 40px);
          overflow-y: auto;
          pointer-events: auto;
          animation: cardAppear 0.2s ease-out;
        }

        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .city-card-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          color: #888;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .city-card-close:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        .city-card-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 16px;
          padding-right: 36px;
        }

        .city-card-flag {
          font-size: 2rem;
          line-height: 1;
          margin-top: 2px;
        }

        .city-card-title {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .city-card-name {
          font-size: 1.125rem;
          font-weight: 500;
          color: #fff;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .city-card-country {
          font-size: 0.8rem;
          color: #888;
          letter-spacing: 0.02em;
        }

        .city-card-actions {
          display: flex;
          gap: 10px;
        }

        .city-card-btn {
          font-size: 0.8rem;
          font-weight: 450;
          padding: 10px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.01em;
        }

        .city-card-btn-preview {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ccc;
        }

        .city-card-btn-preview:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border-color: rgba(255, 255, 255, 0.15);
        }

        .city-card-btn-preview.active {
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          border-color: rgba(255, 255, 255, 0.2);
        }

        .city-card-btn-link {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid transparent;
          color: #111;
        }

        .city-card-btn-link:hover {
          background: #fff;
        }

        .city-card-arrow {
          opacity: 0.7;
          transition: transform 0.15s ease;
        }

        .city-card-btn-link:hover .city-card-arrow {
          transform: translate(1px, -1px);
          opacity: 1;
        }

        .city-card-preview {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition:
            max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            opacity 0.25s ease,
            margin 0.35s ease,
            padding 0.35s ease;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.65;
          margin-top: 0;
          padding-top: 0;
          border-top: 1px solid transparent;
        }

        .city-card-preview p {
          margin: 0;
        }

        .city-card-preview-visible {
          max-height: 400px;
          opacity: 1;
          margin-top: 16px;
          padding-top: 16px;
          border-top-color: rgba(255, 255, 255, 0.06);
        }
      `}</style>

      <div className="world-map-container">
        <MapContainer
          center={[30, 0]}
          zoom={1.5}
          minZoom={1}
          maxZoom={6}
          scrollWheelZoom={false}
          dragging={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          />

          <MapClickHandler onMapClick={() => setSelectedCity(null)} />

          {cities.map((city, index) => (
            <CircleMarker
              key={index}
              center={city.coords}
              radius={4}
              pathOptions={{
                color: "rgba(255, 255, 255, 0.9)",
                fillColor: "#fff",
                fillOpacity: 1,
                weight: 1.5,
              }}
              eventHandlers={{
                click: (e) => {
                  e.originalEvent.stopPropagation();
                  setSelectedCity(city);
                },
                mouseover: (e) => {
                  e.target.setStyle({
                    color: "rgba(255, 255, 255, 1)",
                    fillColor: "#fff",
                    fillOpacity: 1,
                    weight: 1.5,
                  });
                  e.target.setRadius(6);
                },
                mouseout: (e) => {
                  e.target.setStyle({
                    color: "rgba(255, 255, 255, 0.9)",
                    fillColor: "#fff",
                    fillOpacity: 1,
                    weight: 1.5,
                  });
                  e.target.setRadius(4);
                },
              }}
            >
              <Tooltip direction="top" offset={[0, -8]}>
                {city.name}
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>

        {/* Centered City Card */}
        {selectedCity && (
          <div className="city-card-overlay" onClick={() => setSelectedCity(null)}>
            <CityCard city={selectedCity} onClose={() => setSelectedCity(null)} />
          </div>
        )}
      </div>
    </>
  );
}
