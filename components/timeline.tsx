import { Artist } from "@/types/common"

interface TimelineProps {
  artist: Artist
}

export default function Timeline({ artist }: TimelineProps) {
  return (
    <section className="py-32 bg-stone-950 border-t border-amber-900/20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="w-12 h-1 bg-amber-500"></div>
            <p className="text-amber-400 text-sm tracking-widest font-bold uppercase">His Journey</p>
            <div className="w-12 h-1 bg-amber-500"></div>
          </div>
          <h2 className="text-amber-50 mb-4">Life & Legacy Timeline</h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-linear-to-b from-amber-500 via-amber-700 to-amber-500"></div>

          <div className="space-y-12">
            {artist.timeline.map((item, index) => (
              <div key={index} className={`flex gap-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className="w-1/2"></div>
                <div className="relative w-1/2">
                  <div className="bg-stone-900 p-8 border border-amber-900/40 hover:border-amber-500/50 transition-colors">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-black text-amber-400">{item.year}</span>
                      <span className="text-xs text-amber-100/40 tracking-widest uppercase">{item.significance}</span>
                    </div>
                    <p className="text-amber-100/70">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
