export default function sortPlayers(arr) {
  const sortArr = arr.sort((a, b) => b.health - a.health);
  return sortArr;
}
