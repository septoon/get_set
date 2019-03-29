import Character from '../src/js/character';

test('powerMode off', () => {
  const character = new Character('Маг');
  const received = {
    health: character.health,
    attack: character.attack,
    defence: character.defence,
    powerMode: character.powerMode,
  };
  const expected = {
    health: 10, attack: 10, defence: 10, powerMode: false,
  };
  expect(received).toEqual(expected);
});

test('powerMode on', () => {
  const character = new Character('Маг');
  character.powerMode = true;
  const received = {
    health: character.health,
    attack: character.attack,
    defence: character.defence,
    powerMode: character.powerMode,
  };
  const expected = {
    health: 20, attack: 20, defence: 20, powerMode: true,
  };
  expect(received).toEqual(expected);
});

test('powerMode was used', () => {
  const character = new Character('Маг');
  character.powerMode = true;
  character.attackFor();
  character.attackFor();
  character.attackFor();
  character.attackFor();
  character.powerMode = true;
  const received = {
    health: character.health,
    attack: character.attack,
    defence: character.defence,
    powerMode: character.powerMode,
    powerModeWasUse: character.powerModeWasUse,
  };
  const expected = {
    health: 10, attack: 10, defence: 10, powerMode: false, powerModeWasUse: true,
  };
  expect(received).toEqual(expected);
});

test('with attack', () => {
  const character = new Character('Маг');
  character.powerMode = true;
  character.attackFor();
  character.attackFor();
  character.attackFor();
  const received = {
    health: character.health,
    attack: character.attack,
    defence: character.defence,
    powerMode: character.powerMode,
    powerModeWasUse: character.powerModeWasUse,
  };
  const expected = {
    health: 20, attack: 20, defence: 20, powerMode: true, powerModeWasUse: false,
  };
  expect(received).toEqual(expected);
});

test('with 4 attack', () => {
  const character = new Character('Маг');
  character.powerMode = true;
  character.attackFor();
  character.attackFor();
  character.attackFor();
  character.attackFor();
  const received = {
    health: character.health,
    attack: character.attack,
    defence: character.defence,
    powerMode: character.powerMode,
    powerModeWasUse: character.powerModeWasUse,
  };
  const expected = {
    health: 10, attack: 10, defence: 10, powerMode: false, powerModeWasUse: true,
  };
  expect(received).toEqual(expected);
});

test('with attack, powermode off', () => {
  const character = new Character('Маг');
  character.attackFor();
  character.attackFor();
  character.attackFor();
  const received = {
    health: character.health,
    attack: character.attack,
    defence: character.defence,
    powerMode: character.powerMode,
    powerModeWasUse: character.powerModeWasUse,
  };
  const expected = {
    health: 10, attack: 10, defence: 10, powerMode: false, powerModeWasUse: false,
  };
  expect(received).toEqual(expected);
});
