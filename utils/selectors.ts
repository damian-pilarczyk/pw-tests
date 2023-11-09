export function dataTest(id: string): string {
  return `[data-test="${id}"]`;
}

export function dataTestBeginsWith(id: string): string {
  return `[data-test^="${id}"]`;
}
