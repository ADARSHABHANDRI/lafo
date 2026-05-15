export default function Home() {
  const properties = [
    {
      id: 1,
      title: "Rice Field Land",
      location: "Bali, Indonesia",
      type: "Land",
      size: "2 acres",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
      beds: null,
      baths: null,
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Kathmandu, Nepal",
      type: "Apartment",
      size: "3 BHK",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      beds: 3,
      baths: 2,
    },
    {
      id: 3,
      title: "Boutique Hotel",
      location: "Paris, France",
      type: "Hotel",
      size: "12 rooms",
      img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop",
      beds: null,
      baths: null,
    },
  ];

  const stories = [
    { img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=200&auto=format&fit=crop", label: "Villa" },
    { img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=200&auto=format&fit=crop", label: "Apartment" },
    { img: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=200&auto=format&fit=crop", label: "Land" },
    { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=200&auto=format&fit=crop", label: "Homestay" },
    { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&auto=format&fit=crop", label: "Hotel" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-zinc-950/80 border-b border-zinc-800 px-6 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">LAFO</h1>
          <p className="text-xs text-zinc-500">Free global property discovery</p>
        </div>
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search any location..."
            className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 outline-none text-sm w-56 placeholder:text-zinc-500"
          />
          <a href="/explore">
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition">
              Explore
            </button>
          </a>
          <button className="border border-zinc-700 text-white px-4 py-2 rounded-full text-sm hover:border-zinc-500 transition">
            Sign In
          </button>
        </div>
      </header>

      {/* Stories */}
      <section className="px-6 pt-6 pb-2">
        <div className="flex gap-5 overflow-x-auto pb-2">
          {stories.map((s, i) => (
            <div key={i} className="flex flex-col items-center min-w-[80px] cursor-pointer">
              <div className="p-[2px] rounded-full bg-gradient-to-tr from-emerald-400 via-teal-400 to-cyan-400">
                <img src={s.img} alt={s.label} className="w-16 h-16 rounded-full object-cover border-2 border-zinc-950" />
              </div>
              <p className="text-xs mt-2 text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-4">
        <div className="grid grid-cols-3 gap-3 border border-zinc-800 rounded-2xl p-4 bg-zinc-900/50">
          {[
            { label: "Listings", value: "2,400+" },
            { label: "Countries", value: "89" },
            { label: "Always Free", value: "100%" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-xl font-bold">{s.value}</p>
              <p className="text-zinc-500 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Feed */}
      <main className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6 px-6 py-4 pb-24">
        {/* Feed */}
        <div className="space-y-6">
          {properties.map((p) => (
            <div key={p.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <img src={p.img} alt={p.title} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-sm">{p.title}</p>
                    <p className="text-xs text-zinc-500">{p.location}</p>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 border border-emerald-400/30 px-2 py-1 rounded-full">Free</span>
              </div>

              {/* Image */}
              <div className="relative h-[420px]">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Right actions */}
                <div className="absolute right-4 bottom-6 flex flex-col gap-5 items-center">
                  {[{ icon: "♥", count: "2.1k" }, { icon: "💬", count: "48" }, { icon: "↗", count: "Share" }].map((a, i) => (
                    <div key={i} className="text-center cursor-pointer">
                      <div className="bg-white/20 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center text-lg hover:bg-white/30 transition">
                        {a.icon}
                      </div>
                      <p className="text-xs mt-1 text-zinc-300">{a.count}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">{p.type}</span>
                  <p className="text-2xl font-bold mt-2">{p.title}</p>
                  <p className="text-zinc-300 text-sm">{p.size}{p.beds ? ` · ${p.beds} bed · ${p.baths} bath` : ""} · {p.location}</p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-4 flex items-center justify-between">
                <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition">
                  Contact Owner
                </button>
                <button className="border border-zinc-700 text-zinc-400 px-4 py-2 rounded-full text-sm hover:border-zinc-500 transition">
                  View on Map
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-5">
          {/* List your property CTA */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sticky top-24">
            <div className="inline-flex items-center gap-2 text-xs text-emerald-400 border border-emerald-400/20 px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              100% Free Forever
            </div>
            <h2 className="text-xl font-bold mb-2">List your property</h2>
            <p className="text-zinc-400 text-sm mb-5">No agents. No fees. Reach buyers and renters worldwide in minutes.</p>

            <div className="space-y-3 mb-5">
              {["Land", "House", "Apartment", "Hotel", "Homestay"].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {t}
                </div>
              ))}
            </div>

            <button className="w-full bg-white text-black py-3 rounded-2xl font-semibold hover:bg-zinc-200 transition">
              List for Free
            </button>

            <p className="text-center text-xs text-zinc-600 mt-3">No sign-up required to browse</p>
          </div>

          {/* LAFO AI */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center text-black text-xs font-bold">AI</div>
              <div>
                <p className="text-sm font-medium">LAFO AI</p>
                <p className="text-xs text-zinc-500">Ask anything about properties</p>
              </div>
            </div>
            <input type="text" placeholder="Find me a 2BHK in Nepal..." className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm outline-none placeholder:text-zinc-600" />
            <button className="w-full mt-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition">
              Ask LAFO AI
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}