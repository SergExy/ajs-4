import sortPlayers from '../sortPlayers';

test.each([
  [
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  ],
])('test sort players', (arr, sortArr) => {
  const result = sortPlayers(arr);
  expect(result).toEqual(sortArr);
});
