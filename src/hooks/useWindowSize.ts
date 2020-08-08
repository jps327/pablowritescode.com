import React from 'react';

// screen breakpoints following tailwindcss convention
// https://tailwindcss.com/docs/breakpoints
export const SCREEN_SIZE = {
  SMALL: 640,
  PHONE: 640,

  MEDIUM: 768,
  TABLET: 768,

  LARGE: 1024,
  LAPTOP: 1024,

  XL: 1280,
  MONITOR: 1280,
};

// returns tuple of window [width, height]
export default function useWindowSize(): [number, number] {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth || 0);
  const [windowHeight, setWindowHeight] = React.useState(
    window.innerHeight || 0,
  );

  React.useEffect(() => {
    const onWindowResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // update right away to make sure we have the correct size
    onWindowResize();

    // set up cleanup
    return () => window.removeEventListener('resize', onWindowResize);
  }, []); // only run on-mount

  return [windowWidth, windowHeight];
}
