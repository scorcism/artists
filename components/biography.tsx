import { Artist } from "@/types/common"

interface BiographyProps {
  artist: Artist
}

export default function Biography({ artist }: BiographyProps) {
  return (
    <section className="py-32 bg-stone-900 border-t border-amber-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="w-12 h-1 bg-amber-500"></div>
              <p className="text-amber-400 text-sm tracking-widest font-bold uppercase">{artist.biography.sectionLabel}</p>
            </div>
            <h2 className="text-amber-50 mb-12">{artist.biography.title}</h2>
            <div className="space-y-6 text-amber-100/70 leading-relaxed">
              {artist.biography.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {artist.biography.skills.map((skill, index) => (
              <div key={index} className="bg-stone-950 p-8 border border-amber-900/40 hover:border-amber-500/50 transition-colors">
                <h3 className="text-amber-300 mb-3 text-lg font-bold">{skill.title}</h3>
                <p className="text-amber-100/60 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
