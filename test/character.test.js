import Character from '../src/js/character';

test('powerMode off', () => {
  const received = new Character('Маг');
  const expected = {
    name: 'Маг', level: 1, _health: 10, _attack: 10, _defence: 10, attackCount: 0, powerModeWasUse: false, _powerMode: false,
  };
  expect(received).toEqual(expected);
});

test('powerMode on', () => {
  const received = new Character('Маг');
  received.powerMode = true;
  const expected = {
    name: 'Маг', level: 1, _health: 20, _attack: 20, _defence: 20, attackCount: 0, powerModeWasUse: false, _powerMode: true,
  };
  expect(received).toEqual(expected);
});

test('powerMode was used', () => {
  const received = new Character('Маг');
  received.powerMode = true;
  received.attackFor();
  received.attackFor();
  received.attackFor();
  received.powerMode = true;
  const expected = {
    name: 'Маг', level: 1, _health: 10, _attack: 10, _defence: 10, attackCount: 3, powerModeWasUse: false, _powerMode: true,
  };
  expect(received).toEqual(expected);
});

test('with attack', () => {
  const received = new Character('Маг');
  received.powerMode = true;
  received.attackFor();
  received.attackFor();
  received.attackFor();
  const expected = {
    name: 'Маг', level: 1, _health: 20, _attack: 20, _defence: 20, attackCount: 3, powerModeWasUse: false, _powerMode: true,
  };
  expect(received).toEqual(expected);
});

test('with 4 attack', () => {
  const received = new Character('Маг');
  received.powerMode = true;
  received.attackFor();
  received.attackFor();
  received.attackFor();
  received.attackFor();
  const expected = {
    name: 'Маг', level: 1, _health: 20, _attack: 20, _defence: 20, attackCount: 3, powerModeWasUse: true, _powerMode: false,
  };
  expect(received).toEqual(expected);
});

test('with attack, powermode off', () => {
  const received = new Character('Маг');
  received.attackFor();
  received.attackFor();
  received.attackFor();
  const expected = {
    name: 'Маг', level: 1, _health: 10, _attack: 10, _defence: 10, attackCount: 3, powerModeWasUse: false, _powerMode: false,
  };
  expect(received).toEqual(expected);
});
