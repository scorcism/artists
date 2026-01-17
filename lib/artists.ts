import { Artist } from "@/types/common";
import fs from "fs";
import path from "path";

const artistsDirectory = path.join(process.cwd(), "data/artists");

export function getAllArtists(): Artist[] {
  const fileNames = fs.readdirSync(artistsDirectory);
  const artists = fileNames
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      const filePath = path.join(artistsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileContents) as Artist;
    });

  return artists;
}

export function getArtistData(slug: string): Artist | null {
  try {
    const filePath = path.join(artistsDirectory, `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents) as Artist;
  } catch (error) {
    return null;
  }
}
