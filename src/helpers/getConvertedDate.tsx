export function getConvertedDate(date: number | Date | undefined | string) {
  if (!date || isNaN(new Date(date).getTime())) {
    return 'Invalid Date';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}
