export function priceToNumber(price: string): number {
  return +price.replace('$', '');
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('default', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}
