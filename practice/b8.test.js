import { findAllPositiveEvenSubArr } from "./b8";

describe("findAllPositiveEvenSubArr(numberList)", () => {
  it("should return empty if empty", () => {
    expect(findAllPositiveEvenSubArr([])).toEqual([]);
    expect(findAllPositiveEvenSubArr({})).toEqual([]);
    expect(findAllPositiveEvenSubArr("")).toEqual([]);
    expect(findAllPositiveEvenSubArr(true)).toEqual([]);
    expect(findAllPositiveEvenSubArr(123)).toEqual([]);
  });

  it("should return empty if no continuos even sub array", () => {
    expect(findAllPositiveEvenSubArr([1, 3, 5, , 11, 13])).toEqual([]);
  });

  it("should return correct sub array list if has even sub array", () => {
    expect(findAllPositiveEvenSubArr([1, 2, 4, 5, 8, 4, 2])).toEqual([
      [2, 4],
      [8, 4, 2]
    ]);
  });
});
