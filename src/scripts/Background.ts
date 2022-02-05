import { getRandomInt } from "./helpers/numberHelpers";

class Background {

  constructor({ canvasContext }) {
    this.start(canvasContext);
  }

  start(canvasContext: CanvasRenderingContext2D): void {
    const starCount = getRandomInt(200);


      

    for (let i = 0; i < starCount; i++) {
      canvasContext.fillStyle = "#FFFFFF";
      canvasContext.canvas.width  = window.innerWidth;
      canvasContext.canvas.height = window.innerHeight;
      canvasContext.beginPath();
      const gridX = getRandomInt(window.innerWidth);
      const gridY = getRandomInt(window.innerHeight);
      canvasContext.arc(gridX, gridY, 200, 0, 2 * Math.PI);
      canvasContext.fill();
    }
  }
}

export default Background;