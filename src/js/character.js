/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 10;
    this._attack = 10;
    this.defence = 10;
    this.count = 0;
    this.powerModeWasUse = false;
    this._powerMode = false;
  }

  powerModeTurnOn() {
    if (this.powerModeWasUse === true) console.error('powerMode unavailable');
    return this._powerMode;
  }

  attack() {
    if (this.count < 2) this.powerModeWasUse = true;
    if (this.count < 3) {
      this.count += 1;
      this.health *= 2;
      this._attack *= 2;
      this.defence *= 2;
    } else {
      this._powerMode = false;
      console.error('no more attacks');
    }
  }

  get powerMode() {
    return this._powerMode;
  }

  set powerMode(value) {
    if (this.powerModeWasUse === true) {
      console.error('powerMode unavailable');
    } else if (value === true) {
      this._powerMode = true;
    }
  }
}

export default Character;
