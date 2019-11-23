import { mediaQueryBreakpoints } from '../config/constants';

export function getScreenSize() {
  const windowWidth = typeof window !== `undefined` ? window.innerWidth : null;
  const { xs, sm, med, lrg } = mediaQueryBreakpoints;
  let screenSize;

  if (windowWidth <= xs.size) {
    screenSize = xs.name;
  } else if (windowWidth <= sm.size) {
    screenSize = sm.name;
  } else if (windowWidth <= med.size) {
    screenSize = med.name;
  } else if (windowWidth > med.size) {
    screenSize = lrg.name;
  }
  return screenSize;
}
