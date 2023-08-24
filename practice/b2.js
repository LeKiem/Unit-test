// export function statisticsWords(str) {
//   if (str === "") return {};
//   const statistics = {};

//   str.split(" ").filter(x => x !== "").forEach(word => {
//     if (statistics[word]) {
//       statistics[word] += 1;
//     } else {
//       statistics[word] = 1;
//     }
//   });

//   return statistics;
// }
export function statisticsWords(str) {
  if (str === "") return {};
  const statistics = {};

  str.split(" ").filter(x => x !== "").forEach(word => {
    if (statistics[word]) {
      statistics[word] += 1;
    } else {
      statistics[word] = 1;
    }
  });

  return str.split(" ").filter(x => x !== "").reduce((statistics, word) => {
    if (statistics[word]) {
      statistics[word] += 1;
    } else {
      statistics[word] = 1;
    }
    return statistics;
  }, {});
}
