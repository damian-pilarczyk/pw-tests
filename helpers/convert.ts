export function priceToNumber(price: string): number {
  return +price.replace('$', '');
}

export function dateToStringWithoutTime(date: Date): string {
  return date.toISOString().split('T')[0];
}
