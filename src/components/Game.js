import React, { useEffect, useRef } from 'react';
import animate from './main.js';

export default function Game() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.height = canvas.clientHeight;
    canvas.width = canvas.clientWidth;

    const gameLoop = (timeStamp) => {
      animate(timeStamp);
    };

    requestAnimationFrame(gameLoop);

    // Cleanup when component unmounts
    return () => {
      cancelAnimationFrame(gameLoop);
    };
  }, []); // Empty dependency array means this runs only once, when the component mounts

  return (
    <div id="game">
      <img id="board" src="board.png" alt="Game Board" />
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
