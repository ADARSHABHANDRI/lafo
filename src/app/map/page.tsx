export default function MapPage() {
  const listings = [
    { type: "Land", location: "Bali, Indonesia", lat: -8.3405, lng: 115.0920, size: "2 acres" },
    { type: "Apartment", location: "Kathmandu, Nepal", lat: 27.7172, lng: 85.3240, size: "3 BHK" },
    { type: "Hotel", location: "Paris, France", lat: 48.8566, lng: 2.3522, size: "12 rooms" },
    { type: "House", location: "Lagos, Nigeria", lat: 6.5244, lng: 3.3792, size: "4 BHK" },
    { type: "Homestay", location: "Cusco, Peru", lat: -13.5319, lng: -71.9675, size: "2 rooms" },
    { type: "Land", location: "Montana, USA", lat: 46.8797, lng: -110.3626, size: "10 acres" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-zinc-950/80 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Map View</h1>
          <p className="text-xs text-zinc-500">Browse listings by location</p>
        </div>
        <input type="text" placeholder="Search location..." className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 outline-none text-sm w-48 placeholder:text-zinc-500" />
      </header>

      {/* Map placeholder */}
      <div className="relative mx-4 mt-4 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 h-72 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-3">🗺️</div>
          <p className="text-zinc-400 text-sm font-medium">Interactive Map</p>
          <p className="text-zinc-600 text-xs mt-1">Leaflet.js map coming soon</p>
        </div>
        {/* Pin dots */}
        {[
          { top: "30%", left: "70%" },
          { top: "45%", left: "52%" },
          { top: "25%", left: "48%" },
          { top: "60%", left: "30%" },
          { top: "55%", left: "20%" },
          { top: "35%", left: "15%" },
        ].map((pos, i) => (
          <div key={i} style={{ top: pos.top, left: pos.left }} className="absolute w-3 h-3 bg-emerald-400 rounded-full border-2 border-zinc-950 shadow-lg shadow-emerald-400/50"></div>
        ))}
      </div>

      {/* Listings */}
      <div className="px-4 mt-5">
        <h2 className="text-sm font-semibold text-zinc-400 mb-3">{listings.length} listings nearby</h2>
        <div className="flex flex-col gap-3">
          {listings.map((l, i) => (
            <div key={i} className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 transition cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">{l.location}</p>
                <p className="text-xs text-zinc-500">{l.type} · {l.size}</p>
              </div>
              <span className="text-xs text-emerald-400">Free</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}