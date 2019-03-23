/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 10;
    this._attack = 10;
    this.defence = 10;
    this.attackCount = 0;
    this.powerModeCount = 0;
    this.powerModeWasUse = false;
    this._powerMode = false;
  }

  powerModeTurnOn() {
    this._powerMode = true;
    if (this.powerModeCount < 2) {
      this.powerModeCount += 1;
    }
    if (this.powerModeWasUse === true) {
      this._powerMode = false;
      console.log('powerMode unavailable');
    }
    if (this._powerMode === true) {
      this.health *= 2;
      this._attack *= 2;
      this.defence *= 2;
    }

    if (this._powerMode === false) {
      this.health = 10;
      this._attack = 10;
      this.defence = 10;
    }
    return this._powerMode;
  }

  attack() {
    if (this.attackCount > 1 && this._powerMode === true) {
      this.powerModeWasUse = true;
      this._powerMode = false;
    }
    if (this.attackCount > 2) {
      console.log('no more attacks');
    }
    if (this.attackCount < 2 && this.powerModeCount === 1) {
      this._powerMode = true;
    }
    if (this.attackCount < 3) {
      this.attackCount += 1;
    }
  }

  get powerMode() {
    return this._powerMode;
  }

  set powerMode(value) {
    if (value === true) {
      this._powerMode = true;
    }
  }
}

export default Character;
