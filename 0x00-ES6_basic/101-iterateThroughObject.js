/* eslint eqeqeq: ["error", "always"] */
/* eslint no-plusplus: "error" */
export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const item of reportWithIterator) {
    result += `${item} | `;
  }
  return result.substring(0, result.length - 3);
}
