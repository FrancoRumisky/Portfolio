import React from "react";
import AwesomeSlider from "react-awesome-slider";
import styled from "react-awesome-slider/src/styles";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import s from "./Proyects.module.css";
// !Corregir bug background image 
function proyects() {
  const slider = (
    <AwesomeSlider animation="cubeAnimation" cssModule={styled}>
      <div data-src="/img/weather.png">
        <a
          href="https://weather-app-production-5be8.up.railway.app/"
          rel="noreferrer"
          target="_blank"
        >
          <p className={s.parrafo}>
            <span>Weather App</span>
          </p>
        </a>
      </div>
      <div data-src="/img/videogames.png">
        <a
          href="https://videogamesapp-production.up.railway.app/"
          rel="noreferrer"
          target="_blank"
        >
          <p className={s.parrafo}>
            <span>Videogames App</span>
          </p>
        </a>
      </div>
      <div data-src="/img/changapp.png">
        <a
          href="https://changapp.up.railway.app/"
          rel="noreferrer"
          target="_blank"
        >
          <p className={s.parrafo}>
            <span>ChangApp</span>
          </p>
        </a>
      </div>
    </AwesomeSlider>
  );

  return (
    <>
      <div className={s.container}>
        <span>
          <p>PRO</p>
          <p>YECTOS</p>
        </span>
        <div className={s.container1}>{slider}</div>
      </div>
    </>
  );
}

export default proyects;
