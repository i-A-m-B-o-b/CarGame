/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SteeringWheel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "redSteeringWheel",
        "./SteeringWheel/costumes/redSteeringWheel.png",
        { x: 359, y: 360 }
      ),
      new Costume(
        "f1STEERING_WHEEL",
        "./SteeringWheel/costumes/f1STEERING_WHEEL.png",
        { x: 203, y: 355 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.direction = 0;
    this.goto(-175, -150);
    while (true) {
      this.direction = this.stage.vars.direction * 4;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.direction = 0;
    this.goto(-175, -150);
    while (true) {
      if (this.stage.costumeNumber == 1) {
        this.costume = "redSteeringWheel";
      }
      if (this.stage.costumeNumber == 2) {
        this.costume = "redSteeringWheel";
      }
      if (this.stage.costumeNumber == 3) {
        this.costume = "f1STEERING_WHEEL";
      }
      yield;
    }
  }
}
