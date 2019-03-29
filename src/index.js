/* eslint-disable no-console */
import Character from './js/character';

const character = new Character('Маг');
console.log(character);

character.powerMode = true;
character.attackFor();
character.attackFor();
// console.log(character);
character.attackFor();
character.attackFor();
character.powerMode = true;
console.log(character);
