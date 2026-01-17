export interface Artist {
  slug: string;
  name: string;
  fullName: string;
  subtitle: string;
  birthYear: string;
  deathYear: string;
  nationality: string;
  locations: string;
  tagline: string;
  disciplines: string;
  primaryColor: string;
  hero: {
    title: string;
    subtitle: string;
    disciplines: string;
    yearsAndLocation: string;
  };
  biography: {
    sectionLabel: string;
    title: string;
    paragraphs: string[];
    skills: Array<{
      title: string;
      description: string;
    }>;
  };
  masterworks: Array<{
    title: string;
    year: string;
    description: string;
    category: string;
  }>;
  timeline: Array<{
    year: string;
    event: string;
    significance: string;
  }>;
  legacy: {
    title: string;
    stats: Array<{
      value: string;
      label: string;
      sublabel: string;
    }>;
    description: string;
  };
}
