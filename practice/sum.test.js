//Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
// func calc(n){}
// n =< 0 ==> 0
// n > 0 ==> sum
import { calc, calcV2, square, numerator, eveNumerator } from "./sum";
describe(" S(n) = 1 + 2 + 3 + … + n", () => {
  test("should return 0 when n =< 0 ", () => {
    expect(calc(-1)).toBe(0);
    expect(calc(0)).toBe(0);
  });
  test("should  return sum when n > 0", () => {
    expect(calc(1)).toBe(1);
    expect(calc(2)).toBe(3);
    expect(calc(3)).toBe(6);
    expect(calc(4)).toBe(10);
    expect(calc(10)).toBe(55);
  });
});
describe(" S(n) = 1 + 2 + 3 + … + n", () => {
  test("should return 0 when n =< 0 ", () => {
    expect(calcV2(-1)).toBe(0);
    expect(calcV2(0)).toBe(0);
  });
  test("should  return sum when n > 0", () => {
    expect(calcV2(1)).toBe(1);
    expect(calcV2(2)).toBe(3);
    expect(calcV2(3)).toBe(6);
    expect(calcV2(4)).toBe(10);
    expect(calcV2(5)).toBe(15);
    expect(calcV2(10)).toBe(55);
  });
});

describe("Tính S(n) = 1^2 + 2^2 + … + n^2", () => {
  test("should return 0 when n =< 0 ", () => {
    expect(square(-1)).toBe(0);
    expect(square(0)).toBe(0);
  });
  test("should return sum when n > 0", () => {
    expect(square(1)).toBe(1);
    expect(square(2)).toBe(5);
    expect(square(3)).toBe(14);
    expect(square(4)).toBe(30);
  });
});

describe("", () => {
  test("should return 0 when n <= 0", () => {
    expect(numerator(-1)).toBe(0);
    expect(numerator(0)).toBe(0);
  });

  test("should  return sum when n > 0", () => {
    expect(numerator(1)).toBe(1);
    expect(numerator(2)).toBe(3 / 2);
    expect(numerator(3)).toBe(11 / 6);
  });
});

describe("", () => {
  test("should return 0 when n <= 0", () => {
    expect(eveNumerator(-1)).toBe(0);
    expect(eveNumerator(0)).toBe(0);
  });

  test("should  return sum when n > 0", () => {
    expect(eveNumerator(1)).toBe(1);
    expect(eveNumerator(2)).toBe(3);
    expect(eveNumerator(3)).toBe(6);
  });
});
