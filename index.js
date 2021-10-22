import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Speed from "./Speed/Speed.js";
import SpeedometerArrow from "./SpeedometerArrow/SpeedometerArrow.js";
import SteeringWheel from "./SteeringWheel/SteeringWheel.js";
import CarPlayer from "./CarPlayer/CarPlayer.js";
import Spinspeed from "./Spinspeed/Spinspeed.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Speed: new Speed({
    x: -100,
    y: -150,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: true
  }),
  SpeedometerArrow: new SpeedometerArrow({
    x: -116,
    y: -172,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  SteeringWheel: new SteeringWheel({
    x: -175,
    y: -150,
    direction: -4,
    costumeNumber: 2,
    size: 15,
    visible: true
  }),
  CarPlayer: new CarPlayer({
    x: 189.40994733263759,
    y: -65.17358026064835,
    direction: 175.27036883846833,
    costumeNumber: 2,
    size: 25,
    visible: true
  }),
  Spinspeed: new Spinspeed({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
