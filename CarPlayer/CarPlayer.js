/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CarPlayer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("car", "./CarPlayer/costumes/car.png", { x: 81, y: 37 }),
      new Costume("F1 Car", "./CarPlayer/costumes/F1 Car.png", {
        x: 110,
        y: 42
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.BROADCAST, { name: "track" }, this.whenIReceiveTrack),
      new Trigger(Trigger.BROADCAST, { name: "Road" }, this.whenIReceiveRoad),
      new Trigger(
        Trigger.BROADCAST,
        { name: "RandomRoad" },
        this.whenIReceiveRandomroad
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.direction = 90;
    while (true) {
      if (this.keyPressed("a") || this.keyPressed("left arrow")) {
        this.stage.vars.direction += -2;
        if (this.stage.vars.direction < -45) {
          this.stage.vars.direction = -45;
        }
      }
      if (this.keyPressed("d") || this.keyPressed("right arrow")) {
        this.stage.vars.direction += 2;
        if (45 < this.stage.vars.direction) {
          this.stage.vars.direction = 45;
        }
      }
      if (
        !this.keyPressed("right arrow") &&
        !this.keyPressed("d") &&
        !this.keyPressed("a") && !this.keyPressed("left arrow")
      ) {
        if (this.stage.vars.direction < 0) {
          this.stage.vars.direction += 2;
        }
        if (0 < this.stage.vars.direction) {
          this.stage.vars.direction += -2;
        }
        if (this.stage.vars.direction == -1 && this.stage.vars.speed == -0.1) {
          this.stage.vars.direction = 0;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.speed > 0.1) {
        this.direction +=
          (this.stage.vars.spinning / this.stage.vars.speed) * 1.111111111111;
      }
      if (-0.1 > this.stage.vars.speed) {
        this.direction -=
          (this.stage.vars.spinning / this.stage.vars.speed) * 0.5;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.move(this.stage.vars.speed / 10);
      if (this.keyPressed("up arrow")) {
        this.stage.vars.speed += 0.5;
        this.move(this.stage.vars.speed / 10);
      } else {
        if (this.keyPressed("down arrow") && !this.keyPressed("up arrow")) {
          this.stage.vars.speed += -0.5;
          this.move(this.stage.vars.speed / 10);
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (!this.keyPressed("down arrow") && !this.keyPressed("up arrow")) {
        if (0 > this.stage.vars.speed) {
          this.stage.vars.speed += 0.1;
        }
        if (0 < this.stage.vars.speed) {
          this.stage.vars.speed += -0.1;
        }
      }
      yield;
    }
  }

  *whenIReceiveTrack() {
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenIReceiveRoad() {
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenIReceiveRandomroad() {
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.keyPressed("r")) {
        this.costume = "car";
      }
      if (this.keyPressed("s")) {
        0;
      }
      if (this.keyPressed("t")) {
        this.costume = "F1 Car";
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.stage.costumeNumber == 3) {
        if (this.stage.vars.speed > 20) {
          this.stage.vars.speed = 20;
        }
        if (this.keyPressed("down arrow")) {
          if (-3 > this.stage.vars.speed) {
            this.stage.vars.speed = -3;
          }
        }
      }
      if (this.stage.costumeNumber == 2) {
        if (this.stage.vars.speed > 15) {
          this.stage.vars.speed = 15;
        }
        if (this.keyPressed("down arrow")) {
          if (-3 > this.stage.vars.speed) {
            this.stage.vars.speed = -3;
          }
        }
      }
      if (this.stage.costumeNumber == 1) {
        if (this.stage.vars.speed > 15) {
          this.stage.vars.speed = 15;
        }
        if (this.keyPressed("down arrow")) {
          if (-3 > this.stage.vars.speed) {
            this.stage.vars.speed = -3;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      0;
      yield;
    }
  }
}
