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
    this._powerMode = true;
  }

  attack() {
    if (this.count < 3) {
      this.count += 1;
      this.health *= 2;
      this._attack *= 2;
      this.defence *= 2;
    } else {
      this._powerMode = false;
      this.powerModeWasUse = true;
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

const character = new Character('Маг');
console.log(character);

character.powerModeTurnOn();
character.attack();
character.attack();
character.attack();

console.log(character);
