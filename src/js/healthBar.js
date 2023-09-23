export default function healthBar(arr) {
  const { health } = arr;

  if (health > 50) return 'healthy';
  if (health < 15) return 'critical';

  return 'wounded';
}
