export default function getStudentIdsSum(studentObjects) {
  if (Array.isArray(studentObjects) === false) {
    return 0;
  }

  return studentObjects.reduce((sumIds, student) => sumIds + student.id, 0);
}
