export default function ListPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-zinc-950/80 border-b border-zinc-800 px-6 py-4">
        <h1 className="text-xl font-bold">List a Property</h1>
        <p className="text-xs text-zinc-500">Free forever. No agents. No fees.</p>
      </header>

      <div className="px-4 mt-6 space-y-4">
        {/* Free badge */}
        <div className="flex items-center gap-2 border border-emerald-400/20 bg-emerald-400/5 rounded-2xl px-4 py-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <p className="text-sm text-emerald-400">100% Free — no hidden charges ever</p>
        </div>

        {/* Property Type */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <p className="text-sm font-semibold mb-3">Property Type</p>
          <div className="grid grid-cols-3 gap-2">
            {["Land", "House", "Apartment", "Hotel", "Homestay", "Other"].map((t) => (
              <button key={t} className="border border-zinc-700 rounded-xl py-2.5 text-sm text-zinc-400 hover:border-emerald-400 hover:text-emerald-400 transition">
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Basic Info */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3">
          <p className="text-sm font-semibold">Basic Info</p>
          <input type="text" placeholder="Property title" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-zinc-600" />
          <input type="text" placeholder="Location / City / Country" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-zinc-600" />
          <input type="text" placeholder="Size (e.g. 2 acres, 3 BHK)" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-zinc-600" />
          <textarea placeholder="Description..." rows={3} className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-zinc-600 resize-none" />
        </div>

        {/* Contact */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3">
          <p className="text-sm font-semibold">Contact Info</p>
          <input type="text" placeholder="Your name" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-zinc-600" />
          <input type="text" placeholder="Phone or WhatsApp" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-zinc-600" />
          <input type="email" placeholder="Email address" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-zinc-600" />
        </div>

        {/* Upload */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <p className="text-sm font-semibold mb-3">Photos</p>
          <div className="border-2 border-dashed border-zinc-700 rounded-xl py-10 flex flex-col items-center justify-center gap-2 hover:border-zinc-500 transition cursor-pointer">
            <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <p className="text-sm text-zinc-500">Tap to upload photos</p>
            <p className="text-xs text-zinc-700">JPG, PNG up to 10MB</p>
          </div>
        </div>

        {/* Submit */}
        <button className="w-full bg-white text-black py-4 rounded-2xl font-bold text-base hover:bg-zinc-200 transition">
          Publish Listing for Free
        </button>
      </div>
    </div>
  );
}
