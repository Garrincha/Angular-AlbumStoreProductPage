import { Track } from "./track";

export interface Album {
  name: string;
  coverImage: string;
  releaseDate: string;
  tracks: Track[];
  album: Album;
}
