/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SpeedometerArrow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./SpeedometerArrow/costumes/costume1.svg", {
        x: 3,
        y: 3
      })
    ];

    this.sounds = [new Sound("pop", "./SpeedometerArrow/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-100, -150);
    this.stage.vars.speed = 0;
    this.penDown = false;
    while (true) {
      /* TODO: Implement looks_gotofrontback */ null;
      if (this.stage.vars.speed > -1 && 1 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-116, -172);
        this.penDown = false;
      }
      if (this.stage.vars.speed > 1 && 2 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-127, -162);
        this.penDown = false;
      }
      if (this.stage.vars.speed > 2 && 3 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-131, -148);
        this.penDown = false;
      }
      if (this.stage.vars.speed > 3 && 4 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-126, -134);
        this.penDown = false;
      }
      if (this.stage.vars.speed > 4 && 5 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-116, -124);
        this.penDown = false;
      }
      if (this.stage.vars.speed > 5 && 6 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-101, -121);
        this.penDown = false;
      }
      if (this.stage.vars.speed > 6 && 7 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-88, -120);
        this.penDown = false;
      }
      if (this.stage.vars.speed > 7 && 8 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-78, -128);
        this.penDown = false;
      }
      if (this.stage.vars.speed > 8 && 9 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-73, -138);
        this.penDown = false;
      }
      if (this.stage.vars.speed > 9 && 10 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-71, -149);
        this.penDown = false;
      }
      if (this.stage.vars.speed > 10 && 11 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-75, -159);
        this.penDown = false;
      }
      if (this.stage.vars.speed > -2 && -1 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-129, -162);
        this.penDown = false;
      }
      if (this.stage.vars.speed > -3 && -2 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-132, -148);
        this.penDown = false;
      }
      if (this.stage.vars.speed > -4 && -3 > this.stage.vars.speed) {
        this.clearPen();
        this.goto(-100, -150);
        this.penSize = 5;
        this.penColor = Color.rgb(0, 0, 0);
        this.penDown = true;
        this.goto(-125, -134);
        this.penDown = false;
      }
      yield;
    }
  }
}
