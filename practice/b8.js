export function findAllPositiveEvenSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const subArrayList = [];
  let subArray = [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (number % 2 === 0) subArray.push(number);

    if (
      subArray.length > 0 &&
      (number % 2 === 1 || i === numberList.length - 1)
    ) {
      subArrayList.push(subArray);
      subArray = []; // reset subArr
    }
  }

  return subArrayList;
}
