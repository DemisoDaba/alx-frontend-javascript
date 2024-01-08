export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let queries = weakMap.get(endpoint);
  if (queries === undefined) {
    weakMap.set(endpoint, 1);
    queries = 1;
  } else {
    weakMap.set(endpoint, queries + 1);
    queries += 1;
  }

  if (queries >= 5) {
    throw new Error('Endpoint load is high');
  }
}
