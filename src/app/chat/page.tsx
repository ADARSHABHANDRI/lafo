export default function ChatPage() {
  const conversations = [
    { name: "Raj Sharma", location: "Kathmandu, Nepal", msg: "Is the apartment still available?", time: "2m", unread: 2, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop" },
    { name: "Maria Santos", location: "Bali, Indonesia", msg: "I'm interested in the land listing", time: "15m", unread: 1, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop" },
    { name: "James Okafor", location: "Lagos, Nigeria", msg: "Can we schedule a visit?", time: "1h", unread: 0, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop" },
    { name: "Sophie Martin", location: "Paris, France", msg: "What's the monthly rate?", time: "3h", unread: 0, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop" },
    { name: "Carlos Rivera", location: "Cusco, Peru", msg: "Thanks for the info!", time: "1d", unread: 0, img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-zinc-950/80 border-b border-zinc-800 px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-xl font-bold">Messages</h1>
          <button className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
            </svg>
          </button>
        </div>
        <input type="text" placeholder="Search messages..." className="w-full bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 outline-none text-sm placeholder:text-zinc-500" />
      </header>

      {/* Conversations */}
      <div className="px-4 mt-4 flex flex-col gap-2">
        {conversations.map((c, i) => (
          <div key={i} className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 transition cursor-pointer">
            <div className="relative shrink-0">
              <img src={c.img} alt={c.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-zinc-900"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-sm font-medium">{c.name}</p>
                <span className="text-xs text-zinc-500">{c.time}</span>
              </div>
              <p className="text-xs text-zinc-500 truncate">{c.msg}</p>
              <p className="text-xs text-zinc-600 mt-0.5">{c.location}</p>
            </div>
            {c.unread > 0 && (
              <div className="w-5 h-5 bg-emerald-400 rounded-full flex items-center justify-center shrink-0">
                <span className="text-xs text-black font-bold">{c.unread}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* LAFO AI Chat */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center text-black font-bold text-sm">AI</div>
            <div>
              <p className="text-sm font-semibold">LAFO AI</p>
              <p className="text-xs text-zinc-400">Your property assistant</p>
            </div>
          </div>
          <p className="text-zinc-400 text-sm mb-4">Ask me anything — find properties, compare locations, get advice.</p>
          <div className="flex gap-2">
            <input type="text" placeholder="Ask LAFO AI..." className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm outline-none placeholder:text-zinc-600" />
            <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition">
              Ask
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}