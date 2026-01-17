"use client"

export default function Header() {

    const navigations = [{
        name: "Art",
        href: "/",
    }, {
        name: "Music",
        href: "/music",
    }]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-amber-900/30">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                <div className="" />
                <div className="flex gap-12 items-center text-sm tracking-widest font-medium">
                    {navigations.map((nav) => (
                        <a
                            key={nav.name}
                            href={nav.href}
                            className="text-amber-50 hover:text-amber-400 transition-colors duration-300"
                        >
                            {nav.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}
