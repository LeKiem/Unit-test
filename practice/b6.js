// export function countUniqueNumber(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0;

//   const uniqueNumberList = [];
//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];
//     if (!uniqueNumberList.includes(number)) uniqueNumberList.push(number);
//   }

//   return uniqueNumberList.length;
// }

// export function countUniqueNumber(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0;

//   const flash = {};
//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];
//     flash[number] = true;
//   }

//   return Object.keys(flash).length;
// }

//Using Reduce
export function countUniqueNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const flash = numberList.reduce((flash, number) => {
    flash[number] = true;
    return flash;
  }, {});

  return Object.keys(flash).length;
}
