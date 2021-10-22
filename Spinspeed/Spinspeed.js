/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spinspeed extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Spinspeed/costumes/costume1.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [new Sound("pop", "./Spinspeed/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.lightvariable = 0;
    this.vars.lightTimer = 0;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.speed > 10) {
        this.stage.vars.spinning =
          (this.stage.vars.direction / this.stage.vars.speed) * 10;
      } else {
        if (10 > this.stage.vars.speed) {
          this.stage.vars.spinning =
            this.stage.vars.direction * (this.stage.vars.speed / 10);
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.speed > 1) {
        this.stage.vars.spinspeed =
          this.stage.vars.direction / this.stage.vars.speed;
      } else {
        if (1 > this.stage.vars.speed) {
          this.stage.vars.spinspeed = 0;
        }
      }
      yield;
    }
  }
}
