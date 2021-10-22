/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("road", "./Stage/costumes/road.svg", {
        x: 294.3122198335629,
        y: 455.78327712681033
      }),
      new Costume(
        "road (stopLights)",
        "./Stage/costumes/road (stopLights).svg",
        { x: 294.31221968391117, y: 455.7832769265796 }
      ),
      new Costume("track", "./Stage/costumes/track.svg", {
        x: 246.25,
        y: 185.75
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.direction = -1;
    this.vars.speed = -1.2628786905111156e-14;
    this.vars.spinning = 1.2628786905111156e-15;
    this.vars.spinspeed = 0;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.keyPressed("r")) {
        this.costume = "road";
      }
      if (this.keyPressed("s")) {
        this.costume = "road (stopLights)";
      }
      if (this.keyPressed("t")) {
        this.costume = "track";
      }
      yield;
    }
  }
}
