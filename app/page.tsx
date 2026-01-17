import Footer from "@/components/footer"
import Header from "@/components/header"
import { getAllArtists } from "@/lib/artists"
import Link from "next/link"

export default function Home() {
  const artists = getAllArtists()

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { border: string; text: string; hover: string; glow: string }> = {
      amber: {
        border: "border-amber-500/30",
        text: "text-amber-400",
        hover: "hover:border-amber-400 hover:shadow-amber-500/20",
        glow: "bg-amber-900/10",
      },
      red: {
        border: "border-red-500/30",
        text: "text-red-400",
        hover: "hover:border-red-400 hover:shadow-red-500/20",
        glow: "bg-red-900/10",
      },
      blue: {
        border: "border-blue-500/30",
        text: "text-blue-400",
        hover: "hover:border-blue-400 hover:shadow-blue-500/20",
        glow: "bg-blue-900/10",
      },
    }
    return colorMap[color] || colorMap.amber
  }

  return (
    <main className="overflow-hidden bg-stone-950">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-stone-950"></div>
        <div className="absolute inset-0 bg-linear-to-b from-amber-950/10 via-transparent to-stone-950"></div>

        <div className="relative z-10 text-center px-6 max-w-6xl py-20">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-amber-50 mb-6 tracking-tighter leading-none">
              <span className="bg-linear-to-r from-amber-400 via-red-400 to-blue-400 bg-clip-text text-transparent">
                THE ARTS
              </span>
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {artists.map((artist, index) => {
              const colors = getColorClasses(artist.primaryColor)
              return (
                <Link
                  key={artist.slug}
                  href={`/artist/${artist.slug}`}
                  className={`group relative bg-stone-900 border-2 ${colors.border} ${colors.hover} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                >
                  <div className={`absolute inset-0 ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative p-8">

                    <div className="mb-6">
                      <h2 className={`text-3xl font-black ${colors.text} mb-2 tracking-tight `}>
                        {artist.name}
                      </h2>
                      <p className="text-amber-100/60 text-sm tracking-wider">{artist.subtitle}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
