/* eslint-disable no-console */
import Character from './js/character';

const character = new Character('Маг');
console.log(character);

character.powerModeTurnOn();
character.attack();
character.attack();
// console.log(character);
character.attack();
// character.powerModeTurnOn();
console.log(character);
