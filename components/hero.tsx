import { Artist } from "@/types/common"

interface HeroProps {
  artist: Artist
}

export default function Hero({ artist }: HeroProps) {
  const getColorClass = (color: string, type: 'bg' | 'text') => {
    const colorMap: Record<string, Record<string, string>> = {
      amber: { bg: 'bg-amber-900/5', text: 'text-amber-200' },
      red: { bg: 'bg-red-900/5', text: 'text-red-200' },
      blue: { bg: 'bg-blue-900/5', text: 'text-blue-200' },
    }
    return colorMap[color]?.[type] || colorMap.amber[type]
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-stone-950"></div>
      <div className="absolute inset-0 bg-linear-to-b from-amber-950/20 via-transparent to-stone-950"></div>

      <div className={`absolute top-0 left-0 w-96 h-96 ${getColorClass(artist.primaryColor, 'bg')} rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl`}></div>
      <div className={`absolute bottom-0 right-0 w-96 h-96 ${getColorClass(artist.primaryColor, 'bg')} rounded-full translate-x-1/2 translate-y-1/2 blur-3xl`}></div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-amber-50 mb-8 font-black tracking-tighter leading-tight">{artist.hero.title}</h1>
        <p className={`text-3xl md:text-4xl ${getColorClass(artist.primaryColor, 'text')} mb-6 font-light tracking-wide`}>
          {artist.hero.subtitle}
        </p>
        <div className="w-24 h-1 bg-linear-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
        <p className="text-lg text-amber-100/80 max-w-2xl mx-auto leading-relaxed mb-4 font-light">
          {artist.hero.disciplines}
        </p>
        <p className="text-sm text-amber-100/60 tracking-widest">
          {artist.hero.yearsAndLocation}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-xs text-amber-100/40 tracking-widest uppercase">Scroll</p>
        <div className="w-px h-8 bg-linear-to-b from-amber-400 to-transparent"></div>
      </div>
    </section>
  )
}
