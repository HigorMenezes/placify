import {
  Album,
  Playlist,
  ExternalUrls,
  Artist,
  Followers,
  Tracks,
  Images,
  Pagination,
  Profile,
} from "../types";

export function sanitizeExternalUrl(externalUrl: ExternalUrls) {
  return externalUrl.spotify;
}

export function sanitizeFollowers(followers: Followers) {
  return followers.total;
}

export function sanitizeTracks(tracks: Tracks) {
  return tracks.total;
}

export function sanitizeImage(image: Images) {
  return {
    url: image.url,
    height: image.height,
    width: image.width,
  };
}

export function sanitizePagination(pagination: Pagination) {
  return {
    limit: pagination.limit,
    next: !!pagination.next,
    offset: pagination.offset,
    previous: !!pagination.previous,
    total: pagination.total,
  };
}

export function sanitizeProfile(profile: Profile) {
  return {
    id: profile.id,
    name: profile.display_name,
    email: profile.email,
    followers: sanitizeFollowers(profile.followers),
    spotifyUrl: sanitizeExternalUrl(profile.external_urls),
    images: profile.images.map((image) => sanitizeImage(image)),
  };
}

export function sanitizeArtist(artist: Artist) {
  return {
    id: artist.id,
    name: artist.name,
    spotifyUrl: sanitizeExternalUrl(artist.external_urls),
  };
}

export function sanitizeAlbum(album: Album) {
  return {
    artists: album.artists.map((artist) => sanitizeArtist(artist)),
    spotifyUrl: sanitizeExternalUrl(album.external_urls),
    id: album.id,
    images: album.images.map((image) => sanitizeImage(image)),
    name: album.name,
    releaseDate: album.release_date,
    totalTracks: album.total_tracks,
  };
}

export function sanitizePlaylist(playlist: Playlist) {
  return {
    description: playlist.description,
    spotifyUrl: sanitizeExternalUrl(playlist.external_urls),
    id: playlist.id,
    images: playlist.images.map((image) => sanitizeImage(image)),
    name: playlist.name,
    tracks: sanitizeTracks(playlist.tracks),
  };
}
