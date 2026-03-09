export function getFormattedDate() {
  const date = new Date();
  const day = date.getDate();
  const dayStr = day < 10 ? `0${day}` : day;
  const months = date.getMonth() + 1;
  const monthStr = months < 10 ? `0${months}` : months;

  return `${dayStr}-${monthStr}-${date.getFullYear()}`;
}
