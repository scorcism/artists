import Link from "next/link"

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-stone-950 overflow-hidden">

            <div className="relative z-10 text-center px-6 max-w-3xl">
                <div className="mb-8">
                    <h1 className="text-[12rem] md:text-[16rem] font-black text-transparent bg-linear-to-br from-amber-400 via-red-400 to-blue-400 bg-clip-text leading-none tracking-tighter">
                        404
                    </h1>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-amber-50 mb-6 tracking-tight">
                        Page Not Found
                    </h2>
                    <div className="w-32 h-1 bg-linear-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
                    <p className="text-lg text-amber-100/70 leading-relaxed mb-4">
                        Like a lost masterpiece, this page seems to have vanished into history.
                    </p>
                    <p className="text-sm text-amber-100/50 tracking-wide">
                        Perhaps it never existed, or maybe it's been moved to a different gallery.
                    </p>
                </div>

                <div className="flex gap-6 justify-center flex-wrap">
                    <Link
                        href="/"
                        className="group px-10 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-950 transition-all duration-300 tracking-widest text-sm font-bold"
                    >
                        <span className="flex items-center gap-3">
                            <span>← RETURN HOME</span>
                        </span>
                    </Link>
                </div>

                <div className="mt-16">
                    <div className="flex items-center justify-center gap-2 text-amber-100/30">
                        <div className="w-8 h-px bg-amber-500/30"></div>
                        <span className="text-xs tracking-widest">ERROR 404</span>
                        <div className="w-8 h-px bg-amber-500/30"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}
