export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-24">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-zinc-950/80 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Profile</h1>
        <button className="text-xs text-zinc-400 border border-zinc-700 px-3 py-1.5 rounded-full hover:border-zinc-500 transition">
          Edit
        </button>
      </header>

      <div className="px-4 mt-6 space-y-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center text-black text-2xl font-bold shrink-0">
            A
          </div>
          <div>
            <p className="font-semibold text-lg">Adarsha</p>
            <p className="text-zinc-500 text-sm">Kathmandu, Nepal</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-xs text-emerald-400">Active member</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Listings", value: "0" },
            { label: "Saved", value: "0" },
            { label: "Messages", value: "5" },
          ].map((s) => (
            <div key={s.label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-zinc-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          {[
            { label: "My Listings", desc: "Manage your properties" },
            { label: "Saved Properties", desc: "Properties you liked" },
            { label: "Messages", desc: "Your conversations" },
            { label: "Near Me", desc: "Properties around you" },
            { label: "LAFO AI", desc: "Your property assistant" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-4 border-b border-zinc-800 last:border-0 hover:bg-zinc-800/50 transition cursor-pointer">
              <div className="flex-1">
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-zinc-500">{item.desc}</p>
              </div>
              <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center">
          <p className="text-sm text-zinc-400 mb-3">Sign in to save listings and message owners</p>
          <button className="w-full bg-white text-black py-3 rounded-2xl font-semibold hover:bg-zinc-200 transition">
            Sign In / Sign Up
          </button>
          <p className="text-xs text-zinc-600 mt-2">Always free. No credit card needed.</p>
        </div>
      </div>
    </div>
  );
}