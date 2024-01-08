export default function updateStudentGradeByCity(studentObjects, city, newGrades) {
  if (!Array.isArray(studentObjects) || !Array.isArray(newGrades)) {
    return [];
  }

  return studentObjects.filter((student) => student.location === city)
    .map((student) => {
      const studentCopy = { ...student };
      const studentGradeObj = newGrades.find((gradeObj) => gradeObj.studentId === studentCopy.id);
      studentCopy.grade = studentGradeObj ? studentGradeObj.grade : 'N/A';
      return studentCopy;
    });
}
