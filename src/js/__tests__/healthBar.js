import healthBar from '../healthBar';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 40 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
])('testing health status %n health: %h', (arr, status) => {
  const result = healthBar(arr);
  expect(result).toBe(status);
});
