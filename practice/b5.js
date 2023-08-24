//delegate : uy thac

function getTheFirstDigit(number) {
  const unsignedNumber = Math.abs(number);
  const firstDigitCharacters = unsignedNumber.toString().charAt();
  return Number.parseInt(firstDigitCharacters);
}

// export function findAllNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return [];

//   const result = [];
//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];

//     const firstDigit = getTheFirstDigit(number);
//     if (firstDigit % 2 === 1) result.push(number);
//   }
//   return result;
// }

export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  return numberList.filter(number => getTheFirstDigit(number) % 2 === 1);
}
