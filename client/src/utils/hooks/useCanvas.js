import React, { useState, useEffect, useRef } from 'react';

// Path2D for a Heart SVG
const heartSVG = "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"
const circleSVG ="M 0, 10a 5,5 0 1,1 10,0a 5,5 0 1,1 -10,0"
const SVG_PATH = new Path2D(circleSVG);
const pointSize = 3;

// Scaling Constants for Canvas
const SCALE = 1;
const OFFSET = 0;
export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;

export function draw(ctx, location){
  console.log("attempting to draw",location)
  ctx.fillStyle = 'red';
  //ctx.shadowColor = 'blue';
  //ctx.shadowBlur = 15;
  ctx.save();
  ctx.beginPath();
  //ctx.scale(SCALE, SCALE);    
  //ctx.translate(location.x, location.y);
  ctx.arc(location.x, location.y, pointSize, 0, Math.PI * 2, true)
  //ctx.rotate(1 * Math.PI / 180);
  ctx.fill();
  // .restore(): Canvas 2D API restores the most recently saved canvas state
  ctx.restore();  
};

export function useCanvas(){
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);
    const [canvasSize, setCanvasSize] = useState({height:0,width:0})

    useEffect(()=>{
        if(canvasSize.width == 0 && canvasSize.height != 0){
            console.log("canvas width not specified")
        } else if(canvasSize.height == 0 && canvasSize.width != 0){
            console.log("canvas height not specified")
        } else if (canvasSize.height == 0 && canvasSize.width == 0) {
            console.log("canvas size not specified")
        }
    },[])

    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect( 0,0, canvasSize.width, canvasSize.height );
        // draw all coordinates held in state
        coordinates.forEach((coordinate)=>{draw(ctx, coordinate)});
    });

    return [ coordinates, setCoordinates, canvasRef, canvasSize.width, canvasSize.height ,setCanvasSize];
}