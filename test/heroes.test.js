import sortHeroes from '../src/js/heroes';

test('should throw error when input is undefined', () => {
  const input = undefined;
  const inputUndefined = () => sortHeroes(input);
  expect(inputUndefined).toThrowError('Input is null or undefined');
});

test('should throw error when input is null', () => {
  const input = null;
  const inputNull = () => sortHeroes(input);
  expect(inputNull).toThrowError('Input is null or undefined');
});

test('should throw error when input is not an array', () => {
  const input = { name: 'Magician', health: 90 };
  const inputObject = () => sortHeroes(input);
  expect(inputObject).toThrowError('Input is not an array');
});

test('should throw error when no objects in input', () => {
  const input = [90, 'magician'];
  const inputArrayNoObjects = () => sortHeroes(input);
  expect(inputArrayNoObjects).toThrowError('Input does not contain objects');
});

test('should throw error when at least one hero does not have health', () => {
  const input = [
    { name: 'мечник', age: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const inputNoHealth = () => sortHeroes(input);
  expect(inputNoHealth).toThrowError('Heroes have no health');
});

test('should throw error when at least one health is not a number', () => {
  const input = [
    { name: 'мечник', health: '10' },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const inputHealthNotANumber = () => sortHeroes(input);
  expect(inputHealthNotANumber).toThrowError('Health is not a number');
});

test('should return properly sorted array', () => {
  const received = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortHeroes(received)).toStrictEqual(expected);
});

test('should not mutate input array', () => {
  const receivedBefore = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const receivedAfter = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const sortedHeroes = sortHeroes(receivedBefore);
  expect(receivedBefore).toStrictEqual(receivedAfter);
});
