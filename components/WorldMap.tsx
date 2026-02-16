"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
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
    preview: "Only lived here during my first year, but I kept coming back throughout childhood. This is where I learned what it means to build from the ground up and to value resourcefulness. Time spent with family here sparked an early appreciation for traditional food methods like fermentation and a respect for simple systems that sustain themselves.",
  },
  {
    name: "Chișinău",
    country: "Moldova",
    countryCode: "MD",
    coords: [47.0105, 28.8638] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Chi%C8%99in%C4%83u",
    preview: "The city where I grew up and developed most of my early interests. I attended Valeriu Poliacov music school for classical guitar and graduated with a high average. I worked a range of early roles including hostel operations, travel sales, tutoring through EducationUSA, and research roles at the Institute of Chemistry and a short internship at the Institute of Physiology. I also co hosted a national radio show for children in my mid teens and performed with a musical folklore ensemble led by the Osoianu Sisters. This period built my core academic foundation and early professional instincts.",
  },
  {
    name: "Philadelphia",
    country: "USA",
    countryCode: "US",
    coords: [39.9526, -75.1652] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Philadelphia",
    preview: "At Westtown School as an ASSIST Scholar I earned academic distinction while pushing hard in STEM. I posted top percentile standardized scores (1490 SAT, perfect SAT Biology, strong TOEFL), earned a National Spanish Exam medal, competed in varsity wrestling, and studied digital music production. It was my first sustained exposure to a truly high-performing environment.",
  },
  {
    name: "Siegen",
    country: "Germany",
    countryCode: "DE",
    coords: [50.8747, 8.0244] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Siegen",
    preview: "Moved during COVID to save money before starting university. Worked at Burger King while navigating German bureaucracy independently, including registration, employment, and health insurance, and became functionally fluent in the language through necessity. It was my first period living fully on my own and operating without a support system. I saved enough to make attending university financially possible while learning to operate with discipline and high operational standards.",
  },
  {
    name: "Dublin",
    country: "Ireland",
    countryCode: "IE",
    coords: [53.3498, -6.2603] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Dublin",
    preview: "Dublin became my base when travel home was blocked after the invasion of Ukraine. Living with my brother, a cloud networking engineer, gave me daily exposure to how real production systems are built, which pushed me to start teaching myself programming through Khan Academy, Coursera, and Udacity. I also attended my first hackathon (ETHPrague), my first exposure to how technical teams operate under time pressure.",
  },
  {
    name: "San Francisco",
    country: "USA",
    countryCode: "US",
    coords: [37.7749, -122.4194] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/San_Francisco",
    preview: "Studied here during the first and final semesters of university. This is where I added computer science and AI alongside my biology track and began working seriously at the intersection of AI and real world systems. Built early technical projects, started my startup work, and held several roles across research, teaching, and operations. San Francisco is where curiosity turned into a clear technical and professional direction.",
  },
  {
    name: "Seoul",
    country: "South Korea",
    countryCode: "KR",
    coords: [37.5665, 126.978] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Seoul",
    preview: "Visiting student at Sookmyung Women's University. Worked with classmates on a proposal exploring how public libraries could evolve into technology access hubs for migrant communities, starting with outreach connected to Haebangchon. The project gave me my first exposure to applying technical thinking in a real urban context and navigating stakeholder conversations. Seoul's level of organization, safety, and social responsibility reset my expectations for how large systems can function.",
  },
  {
    name: "Taipei",
    country: "Taiwan",
    countryCode: "TW",
    coords: [25.033, 121.5654] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Taipei",
    preview: "Studied in Taipei through a partnership between Minerva and National Taiwan University. Took a traditional Chinese cooking course at NTU and spent the semester building strong local context through classmates, campus life, and competition. Participated in a short program at IRCAD Taiwan focused on computer vision and robotics applications in minimally invasive surgery, interacting with engineers, developers, and clinicians. I also built Minerva FC into a structured team competing in NTU tournaments, a first real test of building an organization that could operate seriously in a new environment.",
  },
  {
    name: "Hyderabad",
    country: "India",
    countryCode: "IN",
    coords: [17.385, 78.4867] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Hyderabad",
    preview: "Studied through a university partnership program at the Centre for Cellular and Molecular Biology, learning directly from researchers working on microbiome and cellular systems. Continued at LaCONES where the focus shifted to conservation biology, animal forensics, and ethical research frameworks. Exposure to these institutions provided a close view of serious scientific environments and interdisciplinary collaboration across biology, systems thinking, and technology.",
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    countryCode: "AR",
    coords: [-34.6037, -58.3816] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Buenos_Aires",
    preview: "Interned at Universidad Torcuato Di Tella with Mate Marote, working on cognitive training games while beginning to build my first real full stack projects with friends, including an early version of the Tonight venue recommendation app. Buenos Aires became a period of deep technical growth and independence. During this time I also traveled extensively across Patagonia including El Calafate, Ushuaia, Río Gallegos, and Torres del Paine, fulfilling a childhood dream inspired by Jules Verne's Voyages Extraordinaires that my parents used to read to me.",
  },
  {
    name: "London",
    country: "UK",
    countryCode: "GB",
    coords: [51.5074, -0.1278] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/London",
    preview: "Worked on front end and visual content for Exchange Theatre, gaining experience translating creative direction into production work. Formalized Minerva FC as an official student initiative and secured funding, allowing the team to operate without personal financing. Began early research that later evolved into my Histomancer capstone project and attended the EAG x Nordics conference focused on AI and safety. London marked a shift toward more deliberate technical and research direction.",
  },
  {
    name: "Berlin",
    country: "Germany",
    countryCode: "DE",
    coords: [52.52, 13.405] as [number, number],
    wiki: "https://en.wikipedia.org/wiki/Berlin",
    preview: "Final year of university. Built Histomancer after pivoting from chest X ray data to histology due to dataset limitations, navigating multiple iterations to reach a workable approach. As student body president I helped coordinate communication and support during a major disruption that forced multiple cohorts to navigate sudden relocation, immigration uncertainty, and graduation concerns while the university itself underwent restructuring. During this period I also met people connected to Transfermarkt and Hertha Berlin, which later contributed to my interest in football analytics.",
  },
];

// Create custom pin icon - needle with marble on top
function createPinIcon() {
  const svgPin = `
    <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Needle - wide at top near marble, tapers to sharp point at bottom -->
      <path d="M5.5 12 L7 26 L8.5 12" fill="white" opacity="0.9"/>
      <!-- Marble edge/contour -->
      <circle cx="7" cy="7" r="6.5" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="1"/>
      <!-- Marble head -->
      <circle cx="7" cy="7" r="6" fill="white"/>
      <!-- Marble shine/highlight -->
      <circle cx="4.5" cy="4.5" r="2" fill="rgba(255,255,255,0.5)"/>
    </svg>
  `;

  return L.divIcon({
    html: `<div class="map-pin">${svgPin}</div>`,
    className: '',
    iconSize: [14, 26],
    iconAnchor: [7, 26],
    tooltipAnchor: [0, -26],
  });
}

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

        /* Brighter map tiles for outdoor visibility */
        .world-map-container .leaflet-tile-pane {
          filter: invert(1) grayscale(100%) brightness(1.3) contrast(1.05);
        }

        /* Custom pin markers */
        .map-pin {
          position: relative;
          cursor: pointer !important;
        }

        .map-pin svg {
          filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.5)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
          transition: all 0.2s ease;
        }

        .map-pin:hover svg {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.7)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4));
          transform: scale(1.1);
        }

        .world-map-container .leaflet-marker-icon {
          background: none !important;
          border: none !important;
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
          margin-top: -4px;
        }

        /* Hide zoom controls */
        .world-map-container .leaflet-control-zoom {
          display: none;
        }

        /* Hide attribution */
        .world-map-container .leaflet-control-attribution {
          display: none !important;
        }

        /* Interactive hint - hidden by default, shows on map hover */
        .map-hint {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          z-index: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          padding: 8px 14px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.75rem;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .world-map-container:hover .map-hint {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .map-hint-dot {
          width: 8px;
          height: 8px;
          background: #fff;
          border-radius: 50%;
          animation: hintPulse 1.5s ease-in-out infinite;
        }

        @keyframes hintPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .world-map-container {
            height: 400px;
          }

          .map-hint {
            bottom: 12px;
            padding: 6px 12px;
            font-size: 0.7rem;
          }
        }

        @media (hover: none) and (pointer: coarse) {
          /* Touch devices - remove pulse animation for cleaner look */
          .world-map-container .leaflet-overlay-pane svg circle {
            animation: none;
          }
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
            <Marker
              key={index}
              position={city.coords}
              icon={createPinIcon()}
              eventHandlers={{
                click: (e) => {
                  L.DomEvent.stopPropagation(e);
                  setSelectedCity(city);
                },
              }}
            >
              <Tooltip direction="top">
                {city.name}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>

        {/* Interactive hint */}
        {!selectedCity && (
          <div className="map-hint">
            <span className="map-hint-dot" />
            <span>Tap a pin to explore</span>
          </div>
        )}

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
