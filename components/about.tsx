export default function About() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="mb-12 text-foreground">The Man Behind the Masterpiece</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Born in Caprese, Italy, Michelangelo Buonarroti (1475-1564) emerged as one of history's greatest
                artists. His unparalleled talent in sculpture, painting, and architecture defined the High Renaissance
                and continues to inspire the world.
              </p>
              <p>
                A perfectionist who saw beauty hidden within marble, Michelangelo believed sculpture was the act of
                liberating the figure from the stone. This philosophy guided every creation, from the iconic David to
                the breathtaking Sistine Chapel ceiling.
              </p>
              <p>
                His works transcend mere artistry—they represent the pinnacle of human achievement, the bridge between
                earth and divine, and the eternal pursuit of perfection.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-background p-8 border border-border">
              <h3 className="text-secondary mb-4">Sculptor</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Master of marble, creating works of unmatched elegance and humanity.
              </p>
            </div>
            <div className="bg-background p-8 border border-border">
              <h3 className="text-secondary mb-4">Painter</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Creator of the Sistine Chapel ceiling, one of humanity's greatest artworks.
              </p>
            </div>
            <div className="bg-background p-8 border border-border">
              <h3 className="text-secondary mb-4">Architect</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Designed St. Peter's Basilica and other Renaissance masterpieces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
