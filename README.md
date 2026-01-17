# Art and Music

> Note: In the age of AI, lets use it to enhance human creativity rather than replace it. This project celebrates human artistry and musical genius. You can contribute by adding more artists by using any source of your choice, including AI-assisted research.

##  Adding a New Artist

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

## 📦 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm

Built with ❤️ to celebrate the masters who shaped our world.
