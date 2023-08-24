import { findAllNumbers } from "./b5";

describe("findAllNumbers(numberList)", () => {
  it("should return empty array if list is empty", () => {
    expect(findAllNumbers([])).toEqual([]);
    expect(findAllNumbers()).toEqual([]);
    expect(findAllNumbers({})).toEqual([]);
    expect(findAllNumbers("")).toEqual([]);
    expect(findAllNumbers(true)).toEqual([]);
  });

  it("should return empty array if list has number starts with odd digit", () => {
    expect(findAllNumbers([2, 423, 6234, -2122])).toEqual([]);
  });

  it("should  return correct list of numbers staring with odd digit", () => {
    expect(findAllNumbers([2, 42, 123, -56, 789012])).toEqual([
      123,
      -56,
      789012
    ]);
  });
});
