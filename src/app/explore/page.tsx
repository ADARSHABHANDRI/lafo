export default function Explore() {
  const listings = [
    { type: "Land", location: "Bali, Indonesia", size: "2 acres", country: "ID" },
    { type: "Apartment", location: "Kathmandu, Nepal", size: "3 BHK", country: "NP" },
    { type: "Hotel", location: "Paris, France", size: "Boutique · 12 rooms", country: "FR" },
    { type: "House", location: "Lagos, Nigeria", size: "4 BHK", country: "NG" },
    { type: "Homestay", location: "Cusco, Peru", size: "2 rooms", country: "PE" },
    { type: "Land", location: "Montana, USA", size: "10 acres", country: "US" },
    { type: "Apartment", location: "Tokyo, Japan", size: "1 BHK", country: "JP" },
    { type: "House", location: "Cape Town, South Africa", size: "3 BHK", country: "ZA" },
    { type: "Homestay", location: "Tbilisi, Georgia", size: "1 room", country: "GE" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-white/10 backdrop-blur-sm bg-[#0a0a0a]/80 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="text-lg font-semibold tracking-tight">LAFO</a>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="/explore" className="text-white">Explore</a>
            <a href="#" className="hover:text-white transition-colors">Near Me</a>
            <a href="#" className="hover:text-white transition-colors">Hotels</a>
            <a href="#" className="hover:text-white transition-colors">List Property</a>
            <button className="bg-white text-black text-sm font-medium px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Explore listings</h1>
          <p className="text-zinc-400">Discover land, homes, hotels and stays worldwide — free forever.</p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          {["All", "Land", "House", "Apartment", "Hotel", "Homestay"].map((f) => (
            <button key={f} className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${f === "All" ? "bg-white text-black border-white" : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"}`}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.map((listing, i) => (
            <div key={i} className="group border border-white/10 rounded-2xl p-5 hover:border-white/25 hover:bg-white/5 transition-all cursor-pointer">
              <div className="w-full h-44 bg-white/5 rounded-xl mb-4"></div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{listing.type}</span>
                <span className="text-xs text-emerald-400">Free</span>
              </div>
              <p className="text-white font-medium">{listing.location}</p>
              <p className="text-zinc-500 text-sm mt-1">{listing.size}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}