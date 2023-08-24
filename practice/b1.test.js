import { isIncreasingNumber } from "./b1";

describe("isIncreasingNumber(", () => {
  it("should return false when n < 10 ", () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach(x => {
      expect(isIncreasingNumber(x)).toBe(false);
    });
  });

  it("should return false when n is not an increasing number ", () => {
    [11, 222, 333, 44444, 55555, 666666, 21, 312, 7896, 121221].forEach(x => {
      expect(isIncreasingNumber(x)).toBe(false);
    });
  });
  it("should return true when n is  an increasing number ", () => {
    [12, 123, 1234, 3456, 45678, 234567].forEach(x => {
      expect(isIncreasingNumber(x)).toBe(true);
    });
  });
});
