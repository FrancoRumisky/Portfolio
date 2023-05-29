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
          href="https://weather-app-orpin-theta.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          <p className={s.parrafo}>
            <span>Weather App</span>
          </p>
          <div className={s.techContainer}>
          <p className={s.tecn}>
            <span>React</span>
          </p>
          <p className={s.tecn}>
            <span>Material UI</span>
          </p>
          <p className={s.tecn}>
            <span>Typescript</span>
          </p>
          <p className={s.tecn}>
            <span>Geolocalización</span>
          </p>
          </div>
        </a>
      </div>
      <div data-src="/img/videogames.png">
        <a
          href="https://video-games-main.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          <p className={s.parrafo}>
            <span>Videogames App</span>
          </p>
          <div className={s.techContainer}>
          <p className={s.tecn}>
            <span>React</span>
          </p>
          <p className={s.tecn}>
            <span>Redux</span>
          </p>
          <p className={s.tecn}>
            <span>Node</span>
          </p>
          <p className={s.tecn}>
            <span>Sequelize</span>
          </p>
          <p className={s.tecn}>
            <span>PostgreSQL</span>
          </p>
          </div>
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
          <div className={s.techContainer}>
          <p className={s.tecn}>
            <span>React</span>
          </p>
          <p className={s.tecn}>
            <span>Redux</span>
          </p>
          <p className={s.tecn}>
            <span>Sequelize</span>
          </p>
          <p className={s.tecn}>
            <span>PostgreSQL</span>
          </p>
          <p className={s.tecn}>
            <span>Bootstrap</span>
          </p>
          </div>
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
        <div className={s.container1}><div>
          </div>{slider}</div>
      </div>
    </>
  );
}

export default proyects;
