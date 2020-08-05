import React, { useRef, useEffect } from "react";
import { createPixelMap } from "../utils";

const Canvas = ({ currentImage }) => {
  let ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext("2d");
    let pixelData = context.createImageData(canvas.width, canvas.height);

    const finalPixels = createPixelMap(currentImage);
    pixelData.data.set(new Uint8ClampedArray([...finalPixels]));
    context.putImageData(pixelData, 0, 0);
  });

  return (
    <div className="canvas-container">
      <canvas ref={ref} className="canvas" width="256" height="128"></canvas>
    </div>
  );
};

export default Canvas;
