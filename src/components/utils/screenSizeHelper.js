import { mediaQueryBreakpoints } from '../config/constants';

export function getScreenSize() {
  const windowWidth = window.innerWidth;
  const { xs, sm, med, lrg } = mediaQueryBreakpoints;
  let screenSize;

  if (windowWidth <= xs) {
    screenSize = `extra-small`;
  } else if (windowWidth <= sm) {
    screenSize = `small`;
  } else if (windowWidth <= med) {
    screenSize = `medium`;
  } else if (windowWidth <= lrg) {
    screenSize = `large`;
  } else {
    screenSize = `medium`;
  }
  return screenSize;
}
