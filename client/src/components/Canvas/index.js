import React, {useEffect,useContext} from 'react';
import { useCanvas } from '../../utils/hooks/useCanvas';
import styles from './canvas.module.css';
import {ThemeContext} from 'styled-components';
import {Row,Col} from 'antd';

const Canvas = () => {

    const themeCtx = useContext(ThemeContext)
    const [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight,setCanvasSize ] = useCanvas();

    const imageUri = process.env.PUBLIC_URL + '/images/maps/map-layouts/Ascent.png';
    const img = new Image();
    img.src = imageUri;
    img.onload = function () {
        img.width = 600
        img.height = 600
    }


    /* "x": -2143,
    "y": -6294 */
    /* "x": -2239,
    "y": -6410 */
    /* "x": 7547,
    "y": -5730 */

    useEffect(()=>{
        img.onload = () => {
            console.log("IMAGE SIZE",img.width,"-",img.height)
            setCanvasSize({width:img.width,height:img.height})
        }
    },[])

    const convertCoordinates = (x,y) => {
        var x2,y2;

        if(x >= 0)
            x2 = (img.width/2) * (1 + (x/10000))
        else x2 = (img.width/2) * (-x/10000)

        if(y >= 0)
            y2 = (img.height/2) * (1 + (y/10000))
        else y2 = (img.height/2) * ((y*-1)/10000)
        
        console.log('COOORDINATES',x2,y2)
        return {x:x2,y:y2}
    }

    const handleCanvasClick=(event)=>{
    // on each click get current mouse location 
    const currentCoord = convertCoordinates(9770,1541);
    // add the newest mouse location to an array in state 
    setCoordinates([...coordinates, currentCoord,convertCoordinates(9770,1541),{x:0,y:0},{x:img.width,y:img.height},{x:img.width/2,y:0}]);
  };


  const handleClearCanvas=(event)=>{
    setCoordinates([]);
  };


  return (
      <Row>
          <Col span={24}>
                <canvas 
                    className={styles.canvas}
                    ref={canvasRef}
                    width={canvasWidth}
                    height={canvasHeight}
                    onClick={handleCanvasClick}/>
                <div className="button" >
                    <button onClick={handleClearCanvas} > CLEAR </button>
                </div>
        </Col>
      </Row>    
  );

};

export default Canvas;
