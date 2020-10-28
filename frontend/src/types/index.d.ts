export interface Artist {
  id: string;
  name: string;
  spotifyUrl: string;
}

export interface Image {
  height?: number;
  url: string;
  width?: number;
}

export interface Album {
  artists: Artist[];
  id: string;
  images: Image[];
  name: string;
  releaseDate: string;
  spotifyUrl: string;
  totalTracks: number;
}

export interface Playlist {
  description: string;
  id: string;
  images: Image[];
  name: string;
  spotifyUrl: string;
  tracks: number;
}
export interface NewAlbums {
  albums: Album[];
  limit: number;
  next: boolean;
  offset: number;
  previous: boolean;
  total: number;
}

export interface FeaturedPlaylists {
  playlists: Playlist[];
  limit: number;
  next: boolean;
  offset: number;
  previous: boolean;
  total: number;
}

export interface Profile {
  id: string;
  name: string;
  email: string;
  followers: number;
  spotifyUrl: string;
  images?: Image[];
}
