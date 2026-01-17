# Masters of the Arts - Multi-Artist Platform

A dynamic Next.js website showcasing the lives, works, and legacies of history's greatest artists.

## 🎨 Features

- **Dynamic Artist Pages**: Each artist has their own dedicated page with complete biography, timeline, masterworks, and legacy sections
- **Beautiful Home Page**: Unique design showcasing all artists with color-coded cards
- **JSON-Based Content**: Easy to add new artists by creating JSON files
- **Responsive Design**: Works beautifully on all devices
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## 📂 Project Structure

```
michelangelo-inspired-website/
├── app/
│   ├── page.tsx                    # Home page listing all artists
│   ├── artist/
│   │   └── [slug]/
│   │       └── page.tsx            # Dynamic artist page
├── components/
│   ├── hero.tsx                    # Hero section (accepts artist data)
│   ├── biography.tsx               # Biography section (accepts artist data)
│   ├── masterworks.tsx             # Masterworks gallery (accepts artist data)
│   ├── timeline.tsx                # Timeline section (accepts artist data)
│   ├── legacy.tsx                  # Legacy section (accepts artist data)
│   ├── navigation.tsx              # Top navigation bar
│   └── footer.tsx                  # Footer component
├── data/
│   └── artists/
│       ├── michelangelo.json       # Michelangelo's data
│       ├── leonardo.json           # Leonardo da Vinci's data
│       └── paganini.json           # Paganini's data
├── lib/
│   └── artists.ts                  # Utility functions for loading artist data
```

## 🎭 Current Artists

1. **Michelangelo Buonarroti** (1475-1564) - The Master of the Renaissance
   - Primary Color: Amber
   - Disciplines: Sculptor, Painter, Architect, Visionary

2. **Niccolò Paganini** (1782-1840) - The Devil's Violinist
   - Primary Color: Red
   - Disciplines: Violinist, Composer, Musical Revolutionary

3. **Leonardo da Vinci** (1452-1519) - The Universal Genius
   - Primary Color: Blue
   - Disciplines: Painter, Inventor, Scientist, Engineer, Polymath

## ➕ Adding a New Artist

To add a new artist to the platform:

1. Create a new JSON file in `data/artists/` (e.g., `beethoven.json`)
2. Follow the structure below:

```json
{
  "slug": "artist-slug",
  "name": "ARTIST NAME",
  "fullName": "Full Artist Name",
  "subtitle": "Artist Subtitle",
  "birthYear": "YYYY",
  "deathYear": "YYYY",
  "nationality": "Nationality",
  "locations": "Key Locations",
  "tagline": "Memorable Tagline",
  "disciplines": "Discipline • Discipline • Discipline",
  "primaryColor": "amber|red|blue|green|purple|etc",
  "hero": {
    "title": "ARTIST NAME",
    "subtitle": "Subtitle",
    "disciplines": "Disciplines string",
    "yearsAndLocation": "Years and location string"
  },
  "biography": {
    "sectionLabel": "Label",
    "title": "Biography Title",
    "paragraphs": [
      "Paragraph 1...",
      "Paragraph 2...",
      "Paragraph 3..."
    ],
    "skills": [
      {
        "title": "Skill Title",
        "description": "Skill description..."
      }
    ]
  },
  "masterworks": [
    {
      "title": "Work Title",
      "year": "YYYY or YYYY-YYYY",
      "description": "Work description...",
      "category": "Category"
    }
  ],
  "timeline": [
    {
      "year": "YYYY",
      "event": "Event description",
      "significance": "Significance label"
    }
  ],
  "legacy": {
    "title": "Legacy Title",
    "stats": [
      {
        "value": "Value (number or symbol)",
        "label": "Stat Label",
        "sublabel": "Stat sublabel"
      }
    ],
    "description": "Legacy description paragraph..."
  }
}
```

3. The artist will automatically appear on the home page and have their own page at `/artist/[slug]`

## 🎨 Color Themes

Each artist can have their own primary color theme:
- `amber` - Warm golden tones
- `red` - Bold red tones
- `blue` - Cool blue tones
- You can extend the color system in the components

## 🚀 Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📝 Customization

### Adding More Fields

You can extend the JSON structure with additional fields:
- Add the field to the `Artist` interface in `lib/artists.ts`
- Update the JSON files with the new data
- Use the data in your components

### Styling

The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles inline

## 🌐 Routes

- `/` - Home page with all artists
- `/artist/michelangelo` - Michelangelo's page
- `/artist/paganini` - Paganini's page
- `/artist/leonardo` - Leonardo da Vinci's page

## 📦 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm

## 🎯 Future Enhancements

- Add image support for artist portraits and masterworks
- Implement search and filter functionality
- Add interactive timelines
- Include audio/video content for relevant artists
- Multi-language support
- Dark/light mode toggle
- Artist comparison feature

---

Built with ❤️ to celebrate the masters who shaped our world.
