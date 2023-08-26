import { countUniqueNumber } from "./b6";
describe("countUniqueNumber(numberList)", () => {
  it("should return 0 if empty ", () => {
    expect(countUniqueNumber([])).toBe(0);
    expect(countUniqueNumber({})).toBe(0);
    expect(countUniqueNumber("")).toBe(0);
    expect(countUniqueNumber(true)).toBe(0);
    expect(countUniqueNumber(123)).toBe(0);
  });
  it("should return length if lists is unique", () => {
    expect(countUniqueNumber([1])).toBe(1);
    expect(countUniqueNumber([1, 2])).toBe(2);
    expect(countUniqueNumber([1, 2, 3])).toBe(3);
  });
  it("should return correct count of unique", () => {
    expect(countUniqueNumber([1, 1, 1])).toBe(1);
    expect(countUniqueNumber([1, 1, 2, 2, 2])).toBe(2);
    expect(countUniqueNumber([1, 3, 1, 3, 2, 2, 2, 3])).toBe(3);
  });
});
