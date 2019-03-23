import Character from '../src/js/character';

test('powerMode off', () => {
  const received = new Character('Маг');
  const expected = {
    name: 'Маг', level: 1, health: 10, _attack: 10, defence: 10, attackCount: 0, powerModeCount: 0, powerModeWasUse: false, _powerMode: false,
  };
  expect(received).toEqual(expected);
});

test('powerMode on', () => {
  const received = new Character('Маг');
  received.powerModeTurnOn();
  const expected = {
    name: 'Маг', level: 1, health: 20, _attack: 20, defence: 20, attackCount: 0, powerModeCount: 1, powerModeWasUse: false, _powerMode: true,
  };
  expect(received).toEqual(expected);
});

test('powerMode was used', () => {
  const received = new Character('Маг');
  received.powerModeTurnOn();
  received.attack();
  received.attack();
  received.attack();
  received.powerModeTurnOn();
  const expected = {
    name: 'Маг', level: 1, health: 10, _attack: 10, defence: 10, attackCount: 3, powerModeCount: 2, powerModeWasUse: true, _powerMode: false,
  };
  expect(received).toEqual(expected);
});

test('with attack', () => {
  const received = new Character('Маг');
  received.powerModeTurnOn();
  received.attack();
  received.attack();
  received.attack();
  const expected = {
    name: 'Маг', level: 1, health: 20, _attack: 20, defence: 20, attackCount: 3, powerModeCount: 1, powerModeWasUse: true, _powerMode: false,
  };
  expect(received).toEqual(expected);
});

test('with 4 attack', () => {
  const received = new Character('Маг');
  received.powerModeTurnOn();
  received.attack();
  received.attack();
  received.attack();
  received.attack();
  const expected = {
    name: 'Маг', level: 1, health: 20, _attack: 20, defence: 20, attackCount: 3, powerModeCount: 1, powerModeWasUse: true, _powerMode: false,
  };
  expect(received).toEqual(expected);
});

test('with attack, powermode off', () => {
  const received = new Character('Маг');
  received.attack();
  received.attack();
  received.attack();
  const expected = {
    name: 'Маг', level: 1, health: 10, _attack: 10, defence: 10, attackCount: 3, powerModeCount: 0, powerModeWasUse: false, _powerMode: false,
  };
  expect(received).toEqual(expected);
});
