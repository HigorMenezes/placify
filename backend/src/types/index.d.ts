/* eslint-disable camelcase */

export interface Followers {
  href?: string;
  total: number;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Images {
  height?: number;
  width?: number;
  url: string;
}

export interface Pagination {
  limit: number;
  next?: string;
  offset: number;
  previous?: string;
  total: number;
}

export interface Profile {
  id: string;
  display_name: string;
  email: string;
  followers: Followers;
  external_urls: ExternalUrls;
  images: Images[];
}

export interface Artist {
  id: string;
  name: string;
  external_urls: ExternalUrls;
}

export interface Album {
  artists: Artist[];
  external_urls: ExternalUrls;
  id: string;
  images: Images[];
  name: string;
  release_date: string;
  total_tracks: number;
}
