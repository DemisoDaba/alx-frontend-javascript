export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const int8d = new Int8Array(buffer);

  if (position < 0 || position >= length) throw new Error('Position outside range');
  // throw new RangeError();

  int8d[position] = value;

  return new DataView(buffer);
}
