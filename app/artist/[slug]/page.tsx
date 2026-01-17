import Biography from "@/components/biography"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Legacy from "@/components/legacy"
import Masterworks from "@/components/masterworks"
import Timeline from "@/components/timeline"
import { getAllArtists, getArtistData } from "@/lib/artists"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
    const artists = getAllArtists()
    return artists.map((artist: any) => ({
        slug: artist.slug,
    }))
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const artist = getArtistData(slug)

    if (!artist) {
        notFound()
    }

    return (
        <main className="overflow-hidden bg-stone-950">
            <Header />
            <Hero artist={artist} />
            <Masterworks artist={artist} />
            <Biography artist={artist} />
            <Timeline artist={artist} />
            <Legacy artist={artist} />
            <Footer />
        </main>
    )
}
