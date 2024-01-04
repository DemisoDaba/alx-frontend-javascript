export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
    if (Array.isArray(students) === false) {
      throw new TypeError('Students must be array of strings');
    } else {
      students.forEach((student) => {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be array of strings');
        }
      });
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = value;
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = value;
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value) === false) {
      throw new TypeError('Students must be array of strings');
    } else {
      value.forEach((student) => {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be array of strings');
        }
      });
      this._students = value;
    }
  }
}
