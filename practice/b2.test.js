import { statisticsWords } from "./b2";

describe("statisticsWords(str)", () => {
  it("should  return empty object in case str is empty", () => {
    expect(statisticsWords("")).toEqual({});
  });

  it("should return correct statistics", () => {
    expect(statisticsWords("easy frontend is very easy")).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1
    });
  });

  it("should return correct statistics when str has redundant spaces ", () => {
    expect(statisticsWords("easy   frontend   is very easy")).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1
    });
  });
});
