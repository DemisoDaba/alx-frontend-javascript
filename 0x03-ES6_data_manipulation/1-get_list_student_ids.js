export default function getListStudentIds(studentObjects) {
  if (Array.isArray(studentObjects) === false) {
    return [];
  }

  return studentObjects.map((student) => student.id);
}
