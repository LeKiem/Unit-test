export function sum(a, b) {
  return a + b;
}

export function classifyStudentV3(mark) {
  if (mark < 0 || mark > 10) return "Invalid mark";
  if (mark > 8) return "Excellence";
  if (mark >= 7) return "Good";
  if (mark >= 4) return "Not Good";
  return "Bad";
}

export function checkIfAllEvenV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let isValid = true;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 != 0) {
      isValid = false;
      break;
    }
  }
  return isValid;
}

export function checkIfAllEvenV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false;
  }
  return true;
}
