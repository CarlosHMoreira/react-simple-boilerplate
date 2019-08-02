import React from 'react';
import styled from 'styled-components';

const Path = styled.path`
  stroke:none;
  fill-rule:nonzero;
  fill:#000000;
  fill-opacity:1;
`
const PlayIcon = () => (
  <svg width="2rem" height="2rem" viewBox="0 0 64 64" version="1.1" fill="#000000">
    <g id="surface177694">
      <Path d="M 8.898438 5.3125 C 8.386719 5.320312 7.882812 5.464844 7.425781 5.738281 C 6.507812 6.285156 5.960938 7.246094 5.960938 8.3125 L 5.960938 55.609375 C 5.960938 56.675781 6.507812 57.636719 7.421875 58.183594 C 7.902344 58.46875 8.429688 58.609375 8.960938 58.609375 C 9.445312 58.609375 9.9375 58.492188 10.386719 58.25 L 54.175781 34.601562 C 55.148438 34.078125 55.75 33.066406 55.75 31.960938 C 55.75 30.855469 55.148438 29.847656 54.175781 29.324219 L 10.386719 5.675781 C 9.917969 5.421875 9.40625 5.300781 8.898438 5.3125 Z M 8.964844 7.3125 C 9.105469 7.3125 9.269531 7.34375 9.4375 7.4375 L 10.566406 8.046875 C 10.210938 8.199219 9.960938 8.550781 9.960938 8.960938 C 9.960938 9.515625 10.410156 9.960938 10.960938 9.960938 L 12.960938 9.960938 C 13.21875 9.960938 13.449219 9.859375 13.625 9.695312 L 53.226562 31.082031 C 53.699219 31.339844 53.75 31.78125 53.75 31.960938 C 53.753906 32.140625 53.703125 32.585938 53.230469 32.84375 L 13.941406 54.054688 C 13.945312 54.023438 13.964844 53.996094 13.964844 53.964844 C 13.964844 53.410156 13.515625 52.964844 12.964844 52.964844 L 10.964844 52.964844 C 10.410156 52.964844 9.960938 53.410156 9.960938 53.964844 C 9.960938 54.515625 10.410156 54.964844 10.964844 54.964844 L 12.265625 54.964844 L 9.4375 56.488281 C 8.988281 56.730469 8.597656 56.554688 8.449219 56.46875 C 8.300781 56.378906 7.960938 56.121094 7.960938 55.609375 L 7.960938 8.3125 C 7.960938 7.800781 8.300781 7.542969 8.449219 7.453125 C 8.539062 7.398438 8.726562 7.3125 8.964844 7.3125 Z M 10.960938 12.964844 C 10.410156 12.964844 9.960938 13.410156 9.960938 13.964844 C 9.960938 14.515625 10.410156 14.964844 10.960938 14.964844 L 12.960938 14.964844 C 13.511719 14.964844 13.960938 14.515625 13.960938 13.964844 C 13.960938 13.410156 13.515625 12.964844 12.960938 12.964844 Z M 10.960938 17.964844 C 10.410156 17.964844 9.960938 18.410156 9.960938 18.964844 C 9.960938 19.515625 10.410156 19.964844 10.960938 19.964844 L 12.960938 19.964844 C 13.511719 19.964844 13.960938 19.515625 13.960938 18.964844 C 13.960938 18.410156 13.515625 17.964844 12.960938 17.964844 Z M 10.960938 22.964844 C 10.410156 22.964844 9.960938 23.410156 9.960938 23.964844 C 9.960938 24.515625 10.410156 24.964844 10.960938 24.964844 L 12.960938 24.964844 C 13.511719 24.964844 13.960938 24.515625 13.960938 23.964844 C 13.960938 23.410156 13.515625 22.964844 12.960938 22.964844 Z M 10.960938 27.964844 C 10.410156 27.964844 9.960938 28.410156 9.960938 28.964844 C 9.960938 29.515625 10.410156 29.964844 10.960938 29.964844 L 12.960938 29.964844 C 13.511719 29.964844 13.960938 29.515625 13.960938 28.964844 C 13.960938 28.410156 13.515625 27.964844 12.960938 27.964844 Z M 10.960938 32.964844 C 10.410156 32.964844 9.960938 33.410156 9.960938 33.964844 C 9.960938 34.515625 10.410156 34.964844 10.960938 34.964844 L 12.960938 34.964844 C 13.511719 34.964844 13.960938 34.515625 13.960938 33.964844 C 13.960938 33.410156 13.515625 32.964844 12.960938 32.964844 Z M 44.886719 32.964844 C 44.753906 32.972656 44.625 33.007812 44.503906 33.074219 L 41.605469 34.566406 C 41.113281 34.820312 40.921875 35.421875 41.171875 35.910156 C 41.351562 36.257812 41.699219 36.453125 42.0625 36.453125 C 42.214844 36.453125 42.375 36.417969 42.519531 36.34375 L 45.421875 34.851562 C 45.910156 34.597656 46.101562 33.996094 45.847656 33.503906 C 45.660156 33.136719 45.273438 32.933594 44.886719 32.964844 Z M 38.242188 36.386719 C 38.113281 36.394531 37.984375 36.429688 37.859375 36.496094 L 17.53125 46.96875 C 17.042969 47.21875 16.847656 47.824219 17.101562 48.3125 C 17.28125 48.660156 17.628906 48.855469 17.992188 48.855469 C 18.144531 48.855469 18.304688 48.820312 18.449219 48.746094 L 38.777344 38.273438 C 39.265625 38.019531 39.460938 37.417969 39.207031 36.925781 C 39.015625 36.558594 38.632812 36.355469 38.242188 36.386719 Z M 10.960938 37.964844 C 10.410156 37.964844 9.960938 38.410156 9.960938 38.964844 C 9.960938 39.515625 10.410156 39.964844 10.960938 39.964844 L 12.960938 39.964844 C 13.511719 39.964844 13.960938 39.515625 13.960938 38.964844 C 13.960938 38.410156 13.515625 37.964844 12.960938 37.964844 Z M 10.960938 42.964844 C 10.410156 42.964844 9.960938 43.410156 9.960938 43.964844 C 9.960938 44.515625 10.410156 44.964844 10.960938 44.964844 L 12.960938 44.964844 C 13.511719 44.964844 13.960938 44.515625 13.960938 43.964844 C 13.960938 43.410156 13.515625 42.964844 12.960938 42.964844 Z M 10.960938 47.964844 C 10.410156 47.964844 9.960938 48.410156 9.960938 48.964844 C 9.960938 49.515625 10.410156 49.964844 10.960938 49.964844 L 12.960938 49.964844 C 13.511719 49.964844 13.960938 49.515625 13.960938 48.964844 C 13.960938 48.410156 13.515625 47.964844 12.960938 47.964844 Z M 10.960938 47.964844 " />
    </g>
  </svg>
);

export default PlayIcon;
