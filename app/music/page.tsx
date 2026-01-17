import Header from "@/components/header"

const MusicComingSoon = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-950 overflow-hidden relative">
      <Header />

      <div className="relative z-10 text-center px-6 max-w-4xl">

        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-light text-red-200 mb-6 tracking-wide">
            Coming Soon
          </h2>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-center gap-2 text-amber-100/30">
            <div className="w-12 h-px bg-red-500/30"></div>
            <span className="text-xs tracking-widest">UNDER CONSTRUCTION</span>
            <div className="w-12 h-px bg-red-500/30"></div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 text-red-400/5 text-6xl animate-pulse">♪</div>
        <div className="absolute top-1/3 right-1/4 text-amber-400/5 text-5xl animate-pulse delay-300">♫</div>
        <div className="absolute bottom-1/4 left-1/3 text-red-400/5 text-7xl animate-pulse delay-500">♩</div>
        <div className="absolute bottom-1/3 right-1/3 text-amber-400/5 text-4xl animate-pulse delay-700">♬</div>
      </div>
    </main>
  )
}

export default MusicComingSoon
