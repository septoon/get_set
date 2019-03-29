/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this._health = 10;
    this._attack = 10;
    this._defence = 10;
    this.attackCount = 0;
    this.powerModeWasUse = false;
    this._powerMode = false;
  }

  attackFor() {
    if (this.attackCount < 3) {
      this.attackCount += 1;
    } else {
      this.powerModeWasUse = true;
      this._powerMode = false;
      console.log('powerMode unavailable');
    }
  }

  get health() {
    if (this._powerMode === true) {
      return this._health * 2;
    }
    return this._health;
  }

  get attack() {
    if (this._powerMode === true) {
      return this._attack * 2;
    }
    return this._attack;
  }

  get defence() {
    if (this._powerMode === true) {
      return this._defence * 2;
    }
    return this._defence;
  }

  get powerMode() {
    return this._powerMode;
  }

  set powerMode(value) {
    if (value === true) this._powerMode = true;
    if (this.powerModeWasUse === true) this._powerMode = false;
  }
}

export default Character;
