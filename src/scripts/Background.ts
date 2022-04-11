import { getRandomInt } from "./helpers/numberHelpers";

class Background {

  constructor({ backgroundElement } : { backgroundElement: SVGElement }) {
    this.start(backgroundElement);
  }

  start(backgroundElement: SVGElement): void {
    const starCount = getRandomInt(300);

    for (let i = 0; i < starCount; i++) {
      const gridX = getRandomInt(window.innerWidth);
      const gridY = getRandomInt(window.innerHeight);
      const star = document.createElement('circle')
      star.setAttribute('cx', '25');
      star.setAttribute('cy', '25')
      star.setAttribute('r', '25');
      star.setAttribute('fill', 'white');
      backgroundElement.appendChild(star);
    }
    
  }
}

export default Background;