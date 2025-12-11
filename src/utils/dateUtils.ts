export function parseDate(str: string): Date {
  const [datePart, timePart] = str.split('T');
  const [day, month, year] = datePart.split('-');
  const [hourStr, minuteStr] = timePart.replace('pm', '').replace('am', '').split(':');
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  const isPM = timePart.includes('pm');
  if (isPM && hour < 12) hour += 12;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthIndex = months.indexOf(month);
  return new Date(Number(year), monthIndex, Number(day), hour, minute);
}
