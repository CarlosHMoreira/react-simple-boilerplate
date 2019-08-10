import React from 'react';
import styled from 'styled-components';

import AlbumImage from './AlbumImage';
import TrackList from './TracksList';
import Trackitem from './TrackItem';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.1fr 0.5fr 1.5fr;
  grid-template-areas: "title title" "album album" "tracks tracks";

  @media screen and (min-width: 550px) {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    grid-template-rows: 0.3fr 1.7fr;
    grid-template-areas: "title title" "album tracks";
  }
`;
const Title = styled.h1`
  grid-area: title;
  font-family: sans-serif;
  color: white;
  font-size: 3rem;
  text-align: center;
  line-height: 1.2;
`;

const mock = {
  id: 1109731,
  readable: true,
  title: "Lose Yourself (From '8 Mile' Soundtrack)",
  title_short: 'Lose Yourself',
  title_version: "(From '8 Mile' Soundtrack)",
  link: 'https://www.deezer.com/track/1109731',
  duration: 326,
  rank: 955402,
  explicit_lyrics: true,
  explicit_content_lyrics: 1,
  explicit_content_cover: 0,
  preview:
    'https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-10.mp3',
  artist: {
    id: 13,
    name: 'Eminem',
    link: 'https://www.deezer.com/artist/13',
    picture: 'https://api.deezer.com/artist/13/image',
    picture_small:
      'https://e-cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/56x56-000000-80-0-0.jpg',
    picture_medium:
      'https://e-cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/250x250-000000-80-0-0.jpg',
    picture_big:
      'https://e-cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/500x500-000000-80-0-0.jpg',
    picture_xl:
      'https://e-cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/1000x1000-000000-80-0-0.jpg',
    tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
    type: 'artist',
  },
  album: {
    id: 119606,
    title: 'Curtain Call: The Hits',
    cover: 'https://api.deezer.com/album/119606/image',
    cover_small:
      'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
    cover_medium:
      'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
    cover_big:
      'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
    cover_xl:
      'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
    tracklist: 'https://api.deezer.com/album/119606/tracks',
    type: 'album',
  },
  type: 'track',
};

const playTrack = (trackSource) => {
  const audio = new Audio(trackSource);
  audio.play();
};

const AlbumPreview = () => (
  <Wrapper>
    <Title>{mock.artist.name}</Title>

    <AlbumImage
      src={mock.album.cover_big}
      alt={mock.album.title}
      title={mock.album.title}
    />

    <TrackList>
      <Trackitem
        name={mock.title}
        track={mock.preview}
        time={mock.duration}
        playTrackFn={playTrack}
      />
      <Trackitem
        name={mock.title}
        track={mock.preview}
        time={mock.duration}
      />
      <Trackitem
        name={mock.title}
        track={mock.preview}
        time={mock.duration}
        playTrackFn={playTrack}
      />
      <Trackitem
        name={mock.title}
        track={mock.preview}
        time={mock.duration}
      />
    </TrackList>
  </Wrapper>
);

export default AlbumPreview;
