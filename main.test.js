// const sum = require("./main");
import {
  sum,
  classifyStudentV3,
  checkIfAllEvenV1,
  checkIfAllEvenV2
} from "./main";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("classifyStudentV3()", () => {
  test("should return Invalid mark , when n < 0", () => {
    const value = classifyStudentV3(-1);
    expect(value).toBe("Invalid mark");
  });
  test("should return Invalid mark , when n > 10", () => {
    const value = classifyStudentV3(11);
    expect(value).toBe("Invalid mark");
  });
  test("should return Excellence , when n > 8", () => {
    expect(classifyStudentV3(9)).toBe("Excellence");
    expect(classifyStudentV3(10)).toBe("Excellence");
  });
  test("should return Good , when n in [7-8]", () => {
    expect(classifyStudentV3(7)).toBe("Good");
    expect(classifyStudentV3(8)).toBe("Good");
  });
  test("should return Not Good , when n in [4-6]", () => {
    [4, 5, 6].forEach(n => {
      expect(classifyStudentV3(n)).toBe("Not Good");
    });
  });
  test("should return Not Good , when n in [1-3]", () => {
    [1, 2, 3].forEach(n => {
      expect(classifyStudentV3(n)).toBe("Bad");
    });
  });
});

describe("checkIfAllEvenV1()", () => {
  test("should return false when not an array", () => {
    expect(checkIfAllEvenV1(1)).toBe(false);
    expect(checkIfAllEvenV1("")).toBe(false);
    expect(checkIfAllEvenV1({})).toBe(false);
    expect(checkIfAllEvenV1(null)).toBe(false);
    expect(checkIfAllEvenV1(undefined)).toBe(false);
  });
  test("should return false when arr is empty", () => {
    expect(checkIfAllEvenV1([])).toBe(false);
  });
  test("should return false when has no even number", () => {
    expect(checkIfAllEvenV1([1, 3, 5, 7])).toBe(false);
  });
  test("should return false when has some even numbers", () => {
    expect(checkIfAllEvenV1([1, 2, 4, 7])).toBe(false);
  });
  test("should return false when has all even numbers", () => {
    expect(checkIfAllEvenV1([4, 2, 6, 8])).toBe(true);
  });
});
describe("checkIfAllEvenV2()", () => {
  test("should return false when not an array", () => {
    expect(checkIfAllEvenV2(1)).toBe(false);
    expect(checkIfAllEvenV2("")).toBe(false);
    expect(checkIfAllEvenV2({})).toBe(false);
    expect(checkIfAllEvenV2(null)).toBe(false);
    expect(checkIfAllEvenV2(undefined)).toBe(false);
  });
  test("should return false when arr is empty", () => {
    expect(checkIfAllEvenV2([])).toBe(false);
  });
  test("should return false when has no even number", () => {
    expect(checkIfAllEvenV2([1, 3, 5, 7])).toBe(false);
  });
  test("should return false when has some even numbers", () => {
    expect(checkIfAllEvenV2([1, 2, 4, 7])).toBe(false);
  });
  test("should return false when has all even numbers", () => {
    expect(checkIfAllEvenV2([4, 2, 6, 8])).toBe(true);
  });
  test("returns true for an empty array", () => {
    expect(checkIfAllEvenV2([])).toBe(false);
  });

  test("returns false if input is not an array", () => {
    expect(checkIfAllEvenV2(42)).toBe(false);
    expect(checkIfAllEvenV2("string")).toBe(false);
    expect(checkIfAllEvenV2({ key: "value" })).toBe(false);
  });

  test("returns true for an array of even numbers", () => {
    expect(checkIfAllEvenV2([2, 4, 6, 8])).toBe(true);
  });

  test("returns false for an array with odd numbers", () => {
    expect(checkIfAllEvenV2([2, 4, 7, 8])).toBe(false);
  });

  test("returns false if there are non-numeric elements", () => {
    expect(checkIfAllEvenV2([2, 4, "string", 8])).toBe(false);
  });
});
