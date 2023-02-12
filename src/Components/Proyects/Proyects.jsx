import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import s from "./Proyects.module.css";

function proyects() {
    
    const slider = (
        <AwesomeSlider animation="cubeAnimation">
          <div data-src="/img/weather.png" />
          <div data-src="/img/videogames.png" />
          <div data-src="/img/changapp.png" />
        </AwesomeSlider>
      );

  return (
    <div className={s.container}>
      {slider}
    </div>
  );
}

export default proyects;
