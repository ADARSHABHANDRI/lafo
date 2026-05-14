export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-white/10 backdrop-blur-sm bg-[#0a0a0a]/80 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">LAFO</span>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Explore</a>
            <a href="#" className="hover:text-white transition-colors">Near Me</a>
            <a href="#" className="hover:text-white transition-colors">Hotels</a>
            <a href="#" className="hover:text-white transition-colors">List Property</a>
            <button className="bg-white text-black text-sm font-medium px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-xs text-zinc-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          Free forever. No agents. No fees.
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
          Find your<br />
          <span className="text-zinc-500">place on earth.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-md mb-10">
          LAFO is a free global platform to discover and list land, homes, apartments, hotels and stays — anywhere in the world.
        </p>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3 w-full max-w-lg">
          <input
            type="text"
            placeholder="Search any location..."
            className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none"
          />
          <button className="bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-zinc-200 transition-colors">
            Search
          </button>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Listings</h2>
          <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">View all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { type: "Land", location: "Bali, Indonesia", size: "2 acres" },
            { type: "Apartment", location: "Kathmandu, Nepal", size: "3 BHK" },
            { type: "Hotel", location: "Paris, France", size: "Boutique · 12 rooms" },
            { type: "House", location: "Lagos, Nigeria", size: "4 BHK" },
            { type: "Homestay", location: "Cusco, Peru", size: "2 rooms" },
            { type: "Land", location: "Montana, USA", size: "10 acres" },
          ].map((listing, i) => (
            <div key={i} className="group border border-white/10 rounded-2xl p-5 hover:border-white/25 hover:bg-white/5 transition-all cursor-pointer">
              <div className="w-full h-40 bg-white/5 rounded-xl mb-4"></div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{listing.type}</span>
                <span className="text-xs text-emerald-400">Free</span>
              </div>
              <p className="text-white font-medium">{listing.location}</p>
              <p className="text-zinc-500 text-sm mt-1">{listing.size}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}