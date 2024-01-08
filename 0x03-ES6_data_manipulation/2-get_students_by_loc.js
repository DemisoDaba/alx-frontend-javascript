export default function getStudentsByLocation(studentObjects, city) {
  if (Array.isArray(studentObjects) === false) {
    return [];
  }

  return studentObjects.filter((student) => (student.location === city));
}
