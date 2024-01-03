/* eslint eqeqeq: ["error", "always"] */
/* eslint no-plusplus: "error" */
export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const len = report.getNumberOfDepartments(allEmployees);

  const employees = {
    ...allEmployees,
    [Symbol.iterator]() {
      let n = 0;
      let i = 0;
      const done = false;
      return {
        next() {
          if (n === len) {
            return { value: undefined, done: true };
          }
          let key = Object.keys(allEmployees)[n];
          let arr = allEmployees[key];
          if (i === arr.length) {
            n += 1;
            i = 0;
            key = Object.keys(allEmployees)[n];
            if (n === len) { return { value: undefined, done: true }; }
            arr = allEmployees[key];
          }
          const value = arr[i];
          i += 1;
          return { value, done };
        },
      };
    },
  };
  return employees;
}
