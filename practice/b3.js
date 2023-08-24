function isAlice(student) {
  if (!student) return false;
  return student.gender === "female" && student.name.toLowerCase() === "alice";
}
export function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;
  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];
    if (isAlice(student)) return true;
  }
  return false;
}
