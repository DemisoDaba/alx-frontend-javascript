export default function appendToEachArrayValue(array, appendString) {
  // for (const idx in array) {
  // //   let value = array[idx];
  //   array[idx] = appendString + array[idx]; //value;
  // }
  const arr = [];
  for (const item of array) {
    arr.push(`${appendString}${item}`);
  }

  return arr;
}
