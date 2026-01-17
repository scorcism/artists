import { Artist } from "@/types/common"

interface LegacyProps {
  artist: Artist
}

export default function Legacy({ artist }: LegacyProps) {
  return (
    <section className="py-32 bg-stone-900 border-t border-amber-900/20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-amber-50 mb-4">{artist.legacy.title}</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {artist.legacy.stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-stone-950 border border-amber-900/40 hover:border-amber-500/50 transition-colors">
              <div className="text-6xl font-black text-amber-400 mb-4">{stat.value}</div>
              <p className="text-amber-100/70 text-lg">{stat.label}</p>
              <p className="text-xs text-amber-100/40 mt-3 tracking-widest">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        <div className="bg-stone-950 border border-amber-900/40 p-12">
          <p className="text-center text-amber-100/70 leading-relaxed text-lg">
            {artist.legacy.description}
          </p>
        </div>
      </div>
    </section>
  )
}