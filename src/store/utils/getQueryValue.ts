export function getQueryValue(search: string, findKey: string) {
  const foundQuery = search
    .replace('?', '')
    .split('&')
    .map((query) => query.split('='))
    .find(([key]) => key === findKey);
  return foundQuery?.[1];
}
