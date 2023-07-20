export function priceToNumber(price: string): number {
  return +price.replace('$', '');
}
