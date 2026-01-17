import { Artist } from "@/types/common"

interface MasterworksProps {
  artist: Artist
}

export default function Masterworks({ artist }: MasterworksProps) {
  return (
    <section className="py-32 bg-stone-950 border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-amber-50 mb-4">Masterworks</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artist.masterworks.map((work, index) => (
            <div
              key={index}
              className="group bg-stone-900 border border-amber-900/30 overflow-hidden hover:border-amber-500/50 transition-all duration-500 cursor-pointer"
            >
              {/* Content */}
              <div className="p-8">
                <p className="text-xs tracking-widest text-amber-400 mb-3 uppercase font-bold">{work.category}</p>
                <h3 className="text-2xl text-amber-50 mb-2 group-hover:text-amber-300 transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-amber-100/60 mb-4 font-light">{work.year}</p>
                <p className="text-amber-100/70 text-sm leading-relaxed">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
