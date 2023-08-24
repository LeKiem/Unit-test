//123
// n % 10 = last digit = 3
// n / 10 = 12.3 ==> Math.trunc(12.3) ==> 12
// Math.trunc(n / 10)
// export function isIncreasingNumber(n) {
//   if (n < 10) return false;

//   let remaining = n;
//   let preDigit = 10;

//   while (remaining > 0) {
//     const lastDigit = remaining % 10;
//     if (lastDigit >= preDigit) return false;
//     preDigit = lastDigit;
//     remaining = Math.trunc(remaining / 10);
//   }

//   return true;
// }

export function isIncreasingNumber(n) {
  if (n < 10) return false;
  const numberString = n.toString();
  for (let i = 0; i < numberString.length; i++) {
    if (numberString[i] >= numberString[i + 1]) return false;
  }
  return true;
}
