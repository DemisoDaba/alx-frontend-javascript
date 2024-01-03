export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }
  task = false;
  task2 = true;
  return [task, task2];
}
